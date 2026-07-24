import EditTourism from "@/components/admin/tourism/EditMain";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditTourismPage({
    params,
}: Props) {
    const { id } = await params;

    return <EditTourism id={id} />;
}