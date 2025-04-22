"use client";

import React from "react";

type Props = {
  tasaInteres: number | null;
  nivelRiesgo: string;
};

export default function GraficoRiesgoRendimiento({
  tasaInteres,
  nivelRiesgo,
}: Props) {
  const riesgoValue = nivelRiesgo ? parseFloat(nivelRiesgo) : 0;
  const tasa = typeof tasaInteres === "number" ? tasaInteres : 0;

  const riesgoMaximo = 10;
  const maxInteres = 30;

  const riesgoAltura = (riesgoValue / riesgoMaximo) * 50;
  const interesAltura = (tasa / maxInteres) * 50;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">Riesgo vs. Rendimiento</h2>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
        <div className="flex justify-around items-end h-[100px]">
          <div className="flex flex-col items-center">
            <div
              className="w-10 bg-blue-500 rounded"
              style={{
                height: `${interesAltura}px`,
                minHeight: "4px",
              }}
            />
            <span className="mt-2 text-sm text-gray-600">Tasa de Interés</span>
          </div>

          <div className="flex flex-col items-center">
            <div
              className="w-10 bg-red-500 rounded"
              style={{
                height: `${riesgoAltura}px`,
                minHeight: "4px",
              }}
            />
            <span className="mt-2 text-sm text-gray-600">Nivel de Riesgo</span>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-gray-400">
          Escalas independientes: interés máx. = 30% - riesgo máx. = 10
        </div>
      </div>
    </div>
  );
}
