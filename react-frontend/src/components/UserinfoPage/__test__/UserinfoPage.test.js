import React from "react";
import { render, screen } from "@testing-library/react";

import UserinfoPage from "../UserinfoPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders userinfo page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <UserinfoPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("userinfo-datatable")).toBeInTheDocument();
    expect(screen.getByRole("userinfo-add-button")).toBeInTheDocument();
});
