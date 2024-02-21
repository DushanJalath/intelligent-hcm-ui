import ManagerSidebar from "./HRSidebar";

function HRRootLayout({ children }) {
    return (
        <div className="flex gap-5">
            <ManagerSidebar />
            <main className="max-w-6xl flex-1 mx-auto py-4">{children}</main>
        </div>
    );
}

export default HRRootLayout;
