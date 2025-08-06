import Title from "@/components/ui/Title";
import Link from "next/link";
import { GithubGraph } from "@/components/ui/github";

export default function GitGraph() {
    return (
        <div className="w-full flex flex-col items-center mt-8 mb-4 gap-4 max-sm:hidden">
            <Title title="GitHub Contributions" />
            <Link href={'https://github.com/charlie-verse'} target="_blank">
                <GithubGraph
                    username="charlie-verse"
                    blockMargin={2}
                    colorPallete={["#1e1e2f", "#5a3e7a", "#7e5aa2", "#a87cc3", "#d9a9e6"]}
                />
            </Link>
        </div>
    )
}