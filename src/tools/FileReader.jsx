import { MarkdownViewer } from "../tools";

export function FileReader({ folder, fileName }) {
    return (
        <main className="md-background">
            <MarkdownViewer folder={folder} fileName={fileName} />
        </main>
    );
}
