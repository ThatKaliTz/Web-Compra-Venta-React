import React, { useState, useEffect } from "react";

export function DatePicker() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [months] = useState([
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ]);

  useEffect(() => {
    // Lógica para agregar opciones de meses
    const selectMes = document.getElementById("select-mes");
    selectMes.innerHTML = "";

    const defaultOptionMes = document.createElement("option");
    defaultOptionMes.text = "Seleccione un mes...";
    defaultOptionMes.disabled = true;
    selectMes.add(defaultOptionMes);

    months.forEach((mes) => {
      const optionMes = document.createElement("option");
      optionMes.text = mes;
      selectMes.add(optionMes);
    });
  }, [months]);

  useEffect(() => {
    // Lógica para agregar opciones de años
    const selectAnio = document.getElementById("select-anio");
    selectAnio.innerHTML = "";

    const defaultOptionAnio = document.createElement("option");
    defaultOptionAnio.text = "Seleccione un año...";
    defaultOptionAnio.disabled = true;
    selectAnio.add(defaultOptionAnio);

    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 50; i--) {
      const optionAnio = document.createElement("option");
      optionAnio.text = i;
      selectAnio.add(optionAnio);
    }
  }, []);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div className="flex items-center justify-center px-4 sm:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex-col text-center">
          <label
            htmlFor="select-mes"
            className="block text-sm font-medium mb-2"
          >
            Mes:
          </label>
          <select
            id="select-mes"
            className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none"
            value={selectedMonth}
            onChange={handleMonthChange}
          >
            <option value="" disabled>
              Seleccione un mes...
            </option>
            {months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-col text-center">
          <label
            htmlFor="select-anio"
            className="block text-sm font-medium mb-2"
          >
            Año:
          </label>
          <select
            id="select-anio"
            className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none"
            value={selectedYear}
            onChange={handleYearChange}
          >
            {/* Las opciones de los años serán generadas dinámicamente por JavaScript */}
            <option value="" disabled>
              Seleccione un año...
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}
