import EditMain from "@/components/admin/tourism/category/EditMain";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditTourismCategoryPage({
    params,
}: Props) {
    const { id } = await params;

    return <EditMain id={id} />;
}