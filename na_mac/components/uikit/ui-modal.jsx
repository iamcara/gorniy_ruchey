import { createPortal } from "react-dom";
/**
 *
 * @param {{
 * width: 'md' | 'full',
 * className: string,
 * isOpen: boolean,
 * onClose: Function
 * }} props
 * @returns {JSX.Element}
 */
export function UiModal({
  width = "md",
  className,
  isOpen = false,
  onClose,
  children,
}) {
  if (!isOpen) return null;

  function handleClick(e) {
    if (!e.target.closest("[data-id=modal]")) {
      onClose();
    }
  }
  const modalClassName =
    "bg-white rounded-lg min-h-[320px] mx-auto relative flex flex-col " +
    { md: "max-w-[640px] w-full", full: "mx-5" }[width];

  const modal = (
    <div
      onClick={handleClick}
      className={`fixed inset-0 bg-slate-900/60 backdrop-blur py-10 overflow-y-auto ${className}`}
    >
      <div data-id="modal" className={modalClassName}>
        <button
          className="w-8 h-8 flex items-center justify-center bg-white/10 absolute top-0 left-[calc(100%+12px)] rounded-md hover:bg-white/40 transition-colors"
          onClick={onClose}
        >
          <CloseIcon className="w-4 h-4 text-white" />
        </button>
        {children}
      </div>
    </div>
  );

  return createPortal(modal, document.getElementById("modals"));
}

UiModal.Header = function UiModalHeader({ children, className }) {
  return (
    <div className={`px-6 pt-6 pb-4 text-2xl ${className}`}>{children}</div>
  );
};

UiModal.Body = function UiModalBody({ children, className }) {
  return <div className={`px-6 ${className}`}>{children}</div>;
};

UiModal.Footer = function UiModalFooter({ children, className }) {
  return (
    <div className={`p-6 flex gap-4 justify-end mt-auto ${className}`}>
      {children}
    </div>
  );
};

function CloseIcon({ className }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.6635 9.99998L19.655 2.00846C20.115 1.54847 20.115 0.804976 19.655 0.34499C19.195 -0.114997 18.4515 -0.114997 17.9915 0.34499L10 8.33651L2.00846 0.34499C1.54847 -0.114997 0.804976 -0.114997 0.34499 0.34499C-0.114997 0.804976 -0.114997 1.54847 0.34499 2.00846L8.33651 9.99998L0.34499 17.9915C-0.114997 18.4515 -0.114997 19.195 0.34499 19.655C0.574397 19.8844 0.87556 19.9996 1.17672 19.9996C1.47789 19.9996 1.77905 19.8843 2.00846 19.655L9.99998 11.6634L17.9915 19.655C18.2209 19.8844 18.5221 19.9996 18.8232 19.9996C19.1244 19.9996 19.4256 19.8843 19.655 19.655C20.115 19.195 20.115 18.4515 19.655 17.9915L11.6635 9.99998Z"
        fill="currentColor"
      />
    </svg>
  );
}
