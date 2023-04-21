import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    <div
      style={{ visibility: alert ? "visible" : "hidden" }}
      className="mb-4 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
    >
      <div className="alert alert-error">
        <div>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 stroke-current mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            ></path>
          </svg>
          <strong>{alert?.message}</strong>
        </div>
      </div>
    </div>
  );
}

export default Alert;
