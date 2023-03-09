import React from "react";
import { render, screen } from "@testing-library/react";

import ArticlePage from "../ArticlePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders article page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ArticlePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("article-datatable")).toBeInTheDocument();
    expect(screen.getByRole("article-add-button")).toBeInTheDocument();
});
