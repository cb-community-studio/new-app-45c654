import React from "react";
import { render, screen } from "@testing-library/react";

import User-infoPage from "../User-infoPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders user-info page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <User-infoPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("user-info-datatable")).toBeInTheDocument();
    expect(screen.getByRole("user-info-add-button")).toBeInTheDocument();
});
