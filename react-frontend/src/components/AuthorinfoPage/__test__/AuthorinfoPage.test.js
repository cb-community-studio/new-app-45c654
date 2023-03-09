import React from "react";
import { render, screen } from "@testing-library/react";

import AuthorinfoPage from "../AuthorinfoPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders authorinfo page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AuthorinfoPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("authorinfo-datatable")).toBeInTheDocument();
    expect(screen.getByRole("authorinfo-add-button")).toBeInTheDocument();
});
