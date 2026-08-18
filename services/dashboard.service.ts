import { DashboardRepository } from "@/repositories/dashboard.repository";

export class DashboardService {

    static async getDashboard() {

        return DashboardRepository.getDashboard();

    }

}