import { Route, Routes } from "react-router-dom";

interface Props {
    children: React.JSX.Element [] | React.JSX.Element;
}

const RoutesWithNotFound = ({ children }: Props) => {
  return (
    <Routes>
        {children}
        <Route path='*' element={<div>Page not found</div>} />
    </Routes>
  );
}

export default RoutesWithNotFound