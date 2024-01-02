'use client'

import { useState } from 'react'
import { GridOptions } from 'ag-grid-community'
import { AgGridReact } from 'ag-grid-react'
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

interface IDonation {
    name: string,
    donation: string
}

export default function DataSheet() {
    const [ columns, setColumns ] = useState([
        { field: 'name'},
        { field: 'donation'}
    ])

    const [ rows, setRows ] = useState<IDonation[]>([
        { name: 'Idle Luck', donation: '35m' },
        { name: 'Epic Smoke', donation: '5b' }
    ])

    const gridOptions: GridOptions = {
        columnDefs: [
            { field: 'name'},
            { field: 'donation'}
        ],

        rowData: [
            { name: 'Idle Luck', donation: '35m' },
            { name: 'Epic Smoke', donation: '5b' } 
        ],
        animateRows: true,
        pagination: true
    }

    return (
    <div className='ag-theme-quartz' style={{ height: 500 }}>
        <AgGridReact gridOptions={gridOptions} />
    </div>
    )
}
