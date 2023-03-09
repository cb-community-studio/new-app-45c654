import React from "react";
import { render, screen } from "@testing-library/react";

import Author-infoPage from "../Author-infoPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders author-info page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Author-infoPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("author-info-datatable")).toBeInTheDocument();
    expect(screen.getByRole("author-info-add-button")).toBeInTheDocument();
});
