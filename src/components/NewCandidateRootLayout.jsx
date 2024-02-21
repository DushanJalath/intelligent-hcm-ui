import NewCandidateSidebar from "./NewCandidateSidebar";

function NewCandidateRootLayout({ children }) {
    return (
        <div className="flex gap-5">
            <NewCandidateSidebar />
            <main className="max-w-6xl flex-1 mx-auto py-4">{children}</main>
        </div>
    );
}

export default NewCandidateRootLayout;
