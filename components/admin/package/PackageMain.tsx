"use client";

import { useEffect, useState } from "react";
import PackageToolbar from "./PackageToolbar";
import PackageTable from "./PackageTable";
import {
    getPackages,
    Package,
} from "./services/package.service";

export default function PackageMain() {
    const [packages, setPackages] = useState<Package[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadPackages();
    }, []);

    async function loadPackages() {
        try {
            const res = await getPackages();

            console.log(res,'res')

            setPackages(res.data.items);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="space-y-6">
            <PackageToolbar />

            <PackageTable
                packages={packages}
                loading={loading}
            />
        </div>
    );
}