import PackageForm from "@/components/admin/package/PackageForm";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditPackagePage({ params }: Props) {
    const { id } = await params;

    return (
        <PackageForm
            mode="edit"
            packageId={id}
        />
    );
}