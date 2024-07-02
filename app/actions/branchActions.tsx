"use server";

import { createClient } from "@/utils/supabase/server";

export interface Service {
    id: number;
    name: string;
    duration: number;
  }
  
  export interface BranchService {
    service: Service[];
  }
  
  export interface Branch {
    id: number;
    name: string;
    location: string;
    openingTime: string;
    closingTime: string;
    services: BranchService[];
  }
  

  export async function fetchBranches(): Promise<Branch[]> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('branches')
      .select(`
        id,
        name,
        location,
        openingTime,
        closingTime,
        services:branch_services(
          service:services(id, name, duration)
        )
      `);
  
    if (error) {
      console.error('Error fetching branches:', error);
      throw error;
    }

    // Transform the data to match the Branch interface
    const transformedData: Branch[] = data.map((branch: any) => ({
      id: branch.id,
      name: branch.name,
      location: branch.location,
      openingTime: branch.openingTime,
      closingTime: branch.closingTime,
      services: branch.services.map((branchService: any) => ({
        service: branchService.service // Map the array of services
      }))
    }));

    return transformedData;
}


export async function addServiceToBranch(branchId: number, serviceId: number) {
  const supabase = createClient();
  const { error } = await supabase
    .from("branch_services")
    .insert({ branch_id: branchId, service_id: serviceId });

  if (error) {
    console.error("Error adding service to branch:", error);
    throw error;
  }
}

export async function fetchServices() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .order("name");

  if (error) {
    console.error("Error fetching services:", error);
    throw error;
  }

  return data || [];
}


export async function fetchBranchesWithServices() {
    const supabase = createClient();
    // Assuming there's a relationship between branches and services in your database
    const { data, error } = await supabase
      .from("branches")
      .select("*, services(*)")
      .order("name");
  
    if (error) {
      console.error("Error fetching branches with services:", error);
      throw error;
    }
  
    return data || [];
  }
