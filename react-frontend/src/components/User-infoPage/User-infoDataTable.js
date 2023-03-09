
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';


const User-infoDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.userID}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.name}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.surname}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.address}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.phone}</p>
    const avatarTemplate5 = (rowData, { rowIndex }) => <Avatar image={rowData.avatar}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="userID" header="userID" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="name" header="name" body={pTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="surname" header="surname" body={pTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="address" header="address" body={pTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="phone" header="phoneNumber" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="avatar" header="userAvatar" body={avatarTemplate5} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default User-infoDataTable;