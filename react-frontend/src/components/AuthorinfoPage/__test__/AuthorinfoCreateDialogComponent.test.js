import React from "react";
import { render, screen } from "@testing-library/react";

import AuthorinfoCreateDialogComponent from "../AuthorinfoCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders authorinfo create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AuthorinfoCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("authorinfo-create-dialog-component")).toBeInTheDocument();
});
