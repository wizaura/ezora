import EditVehicle from "@/components/admin/fleet/EditMain";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditFleetPage({
    params,
}: PageProps) {
    const { id } = await params;

    return <EditVehicle id={id} />;
}