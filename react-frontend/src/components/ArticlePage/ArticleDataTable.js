
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { Calendar } from 'primereact/calendar';


const ArticleDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.articleID}</p>
    const imageTemplate1 = (rowData, { rowIndex }) => <Image src={rowData.thumbnail}  alt="Image" height="60px" />
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.articleTitle}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.articleContent}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.author}</p>
    const calendarTemplate5 = (rowData, { rowIndex }) => <Calendar className="w-20rem" dateFormat="dd/mm/yy" placeholder={"dd/mm/yy"} value={new Date(rowData.datePublished)} showTime ></Calendar>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="articleID" header="articleID" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="thumbnail" header="thumbnail" body={imageTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="articleTitle" header="Title" body={pTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="articleContent" header="content" body={pTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="author" header="author(s)" body={pTemplate4} sortable style={{ minWidth: "8rem" }} />
            <Column field="datePublished" header="date" body={calendarTemplate5} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default ArticleDataTable;