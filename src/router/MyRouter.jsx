  import { Navigate, Route, Routes } from "react-router";
  import { Main } from "../pages/Main";
  import { Create } from "../pages/Create";
  import { Update } from "../pages/Update";

  export const MyRouter = () => {
    return (
      <Routes>
        <Route index element={<Navigate to="main" />} />
        <Route path="/main" element={<Main />} />
        <Route path="main/create" element={<Create />} />
        <Route path="main/update/:id" element={<Update />} />
      </Routes>
    );
  };
