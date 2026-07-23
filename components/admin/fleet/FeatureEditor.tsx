"use client";

import { Plus, Trash2 } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { VehicleDto } from "@/validators/vehicle.validator";

export default function FeatureEditor() {
    const { control, register } = useFormContext<VehicleDto>();

    const { fields, append, remove } = useFieldArray({
        control,
        name: "features",
    });

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-semibold">
                        Vehicle Features
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Add the key features of this vehicle.
                    </p>
                </div>

                <Button
                    type="button"
                    onClick={() =>
                        append({
                            title: "",
                            sortOrder: fields.length,
                        })
                    }
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Feature
                </Button>
            </div>

            {fields.length === 0 && (
                <div className="rounded-lg border-2 border-dashed py-10 text-center text-sm text-gray-500">
                    No features added.
                </div>
            )}

            <div className="space-y-4">
                {fields.map((field, index) => (
                    <div
                        key={field.id}
                        className="flex items-center gap-3"
                    >
                        <input
                            {...register(
                                `features.${index}.title`
                            )}
                            placeholder={`Feature ${index + 1}`}
                            className="flex-1 rounded-lg border px-4 py-3 outline-none focus:border-primary"
                        />

                        <Button
                            type="button"
                            variant="destructive"
                            onClick={() => remove(index)}
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}