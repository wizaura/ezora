import EditFleetCategory from "@/components/admin/fleet/category/EditMain";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditCategoryPage({
    params,
}: Props) {
    const { id } = await params;

    return <EditFleetCategory id={id} />;
}