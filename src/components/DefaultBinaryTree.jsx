
import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';

export default function DefaultBinaryTree() {
    const [selection, setSelection] = useState([]);
    const [data] = useState([
        {
            label: 'ChathuraPD6',
            className: 'bg-[#151515] text-[#ffffff] shadow-lg shadow-black border-[#565656] border-opacity-40 border-[1px]',
            expanded: true,
            children: [
                {
                    label: 'Kalana66',
                    className: 'bg-[#151515] text-[#ffffff] shadow-lg shadow-black border-[#565656] border-opacity-40 border-[1px]',
                    expanded: true,
                    children: [
                        {
                            className: 'bg-[#151515] text-[#ffffff] shadow-lg shadow-black border-[#565656] border-opacity-40 border-[1px]',
                            label: 'Chathurar87'
                        },
                        {
                            className: 'bg-[#151515] text-[#ffffff] shadow-lg shadow-black border-[#565656] border-opacity-40 border-[1px]',
                            label: 'Shehan97',
                            expanded: true,
                            children : [
                                {
                                    className: 'bg-[#151515] text-[#ffffff] shadow-lg shadow-black border-[#565656] border-opacity-40 border-[1px]',
                                    label:'Ashani12K'
                                },
                                {
                                    className: 'bg-[#151515] text-[#ffffff] shadow-lg shadow-black border-[#565656] border-opacity-40 border-[1px]',
                                    label:'NimsaraLakruwan99'
                                }
                               
                            ]
                        }
                    ]
                },
                {
                    label: 'AnudhaKt23',
                    className: 'bg-[#151515] text-[#ffffff] shadow-lg shadow-black border-[#565656] border-opacity-40 border-[1px]',
                    expanded: true,
                    children: [
                        {
                            className: 'bg-[#151515] text-[#ffffff] shadow-lg shadow-black border-[#565656] border-opacity-40 border-[1px]',
                            label: 'Nimal99'
                        },
                        {
                            className: 'bg-[#151515] text-[#ffffff] shadow-lg shadow-black border-[#565656] border-opacity-40 border-[1px]',
                            label: 'Kasun64'
                        }
                    ]
                }
            ]
        }
    ]);

    return (
        <div className="card-tree overflow-x-auto w-full" id="style-5">
            <OrganizationChart
                value={data}
                selectionMode="single"
                selection={selection}
                onSelectionChange={(e) => setSelection(e.data)}
                pt={{
                    node: ({ context }) => ({
                        className: context.selected ? 'border-orange-400 border-round-sm' : 'border-primary-400 border-round-sm'
                    })
                }}
            />
        </div>
    )
}
        