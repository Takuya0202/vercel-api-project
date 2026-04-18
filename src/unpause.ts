import { createInterface } from "node:readline/promises";

const token = process.env.VERCEL_TOKEN;
const teamId = process.env.TEAM_ID;

if (!token || !teamId) {
    console.error("VERCEL_TOKENまたはTEAM_IDが設定されていません");
    process.exit(1);
}

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const projectId = (await rl.question("unpause対象のproject_idを入力してください: ")).trim();
rl.close();

if (!projectId) {
    console.error("projectIdが入力されていません");
    process.exit(1);
}

const url = new URL(`https://api.vercel.com/v1/projects/${projectId}/unpause`);
url.searchParams.set("teamId", teamId);

try {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) {
        const body = await res.json();
        throw new Error(`API error ${res.status}: ${JSON.stringify(body)}`);
    }

    console.log(`Project ${projectId} をunpauseしました。`);
} catch (err) {
    console.error("unpauseに失敗しました:", err instanceof Error ? err.message : err);
    process.exit(1);
}
