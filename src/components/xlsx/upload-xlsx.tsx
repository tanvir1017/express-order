"use client";
import { useState } from "react";
import * as XLSX from "xlsx";

const UploadXlsx = () => {
  const [xlsxData, setXlsxData] = useState([]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const handleFileUpload = (e: any) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const data = e?.target?.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setXlsxData(parsedData as any);
    };
  };

  return (
    <div className="my-5">
      <h1 className="text-3xl mb-3 font-bold">
        Upload Your Express Order File
      </h1>

      <form onSubmit={handleSubmit}></form>

      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      {xlsxData.length > 0 && (
        <>
          <section className="mx-auto w-full max-w-7xl mt-5">
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
              <div>
                <h2 className="text-lg font-semibold">Orders</h2>
                <p className="mt-1 text-sm text-gray-700">
                  This is a list of all orders. You can add new orders, edit or
                  delete existing ones.
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add new order
                </button>
              </div>
            </div>
            <div className="mt-6 flex flex-col">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr className="divide-x divide-gray-200">
                          {Object.keys(xlsxData[0]).map((key) => (
                            <th
                              key={key}
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                            >
                              {key}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {xlsxData.map((row, index) => (
                          <tr key={index} className="divide-x divide-gray-200">
                            {Object.values(row).map((value, index) => (
                              <td className="whitespace-nowrap px-12 py-4">
                                <div className="text-sm text-gray-900">
                                  {value as any}
                                </div>
                                <div className="text-sm text-gray-500">
                                  hello
                                </div>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 w-full border-gray-300">
              <div className="mt-2 flex items-center justify-end">
                <div className="space-x-2">
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    &larr; Previous
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Next &rarr;
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default UploadXlsx;
