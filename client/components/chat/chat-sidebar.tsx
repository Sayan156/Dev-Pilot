
"use client";

import { formatDistanceToNow } from "date-fns";
import { Plus, RotateCcw, Trash2 } from "lucide-react";

import { IndexStatusBadge } from "@/components/dashboard/repo-status";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
    useChatSessions,
    useCreateChatSession,
    useDeleteChatSession,
} from "@/hooks/use-chat";
import { useStartIndexing } from "@/hooks/use-repos";
import type { Repository } from "@/lib/api";
import { cn } from "@/lib/utils";

export function ChatSidebar({
    repo,
    sessionId,
    onSelectSession,
}: {
    repo: Repository;
    sessionId: string | null;
    onSelectSession: (id: string) => void;
}) {
    const ready = repo.indexStatus === "READY";
    const sessionsQuery = useChatSessions(repo.id, ready);
    const createSession = useCreateChatSession(repo.id);
    const deleteSession = useDeleteChatSession(repo.id);
    const reindex = useStartIndexing();

    function handleDelete(id: string, title: string) {
        const confirmed = window.confirm(
            `Delete "${title}"? This will permanently delete the chat and its messages.`
        );

        if (!confirmed) return;

        const sessions = sessionsQuery.data ?? [];
        const index = sessions.findIndex((session) => session.id === id);
        const nextSession = sessions[index + 1];

        deleteSession.mutate(id, {
            onSuccess: () => {
                if (sessionId === id && nextSession) {
                    onSelectSession(nextSession.id);
                }
            },
        });
    }

    const originalSessionId = sessionsQuery.data?.at(-1)?.id;

    return (
        <aside className="flex w-full flex-col border-b md:w-72 md:border-r md:border-b-0">
            <div className="space-y-3 p-4">
                <div className="space-y-1">
                    <p className="truncate text-sm font-medium">
                        {repo.fullName}
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                        <IndexStatusBadge status={repo.indexStatus} />
                        {repo.isPrivate && (
                            <span className="text-xs text-muted-foreground">
                                Private
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex gap-2">
                    <Button
                        size="sm"
                        className="flex-1"
                        disabled={!ready || createSession.isPending}
                        onClick={() =>
                            createSession.mutate("New chat", {
                                onSuccess: (session) =>
                                    onSelectSession(session.id),
                            })
                        }
                    >
                        <Plus data-icon="inline-start" />
                        New chat
                    </Button>

                    <Button
                        size="sm"
                        variant="outline"
                        disabled={
                            reindex.isPending ||
                            repo.indexStatus === "INDEXING"
                        }
                        onClick={() => reindex.mutate(repo.id)}
                        aria-label="Re-index repository"
                    >
                        <RotateCcw />
                    </Button>
                </div>
            </div>

            <Separator />

            <div className="px-4 py-2 text-xs font-medium text-muted-foreground">
                Sessions
            </div>

            <ScrollArea className="flex-1">
                <div className="space-y-1 px-2 pb-4">
                    {!ready && (
                        <p className="px-2 text-xs text-muted-foreground">
                            Sessions unlock after indexing completes.
                        </p>
                    )}

                    {sessionsQuery.isLoading &&
                        Array.from({ length: 3 }).map((_, i) => (
                            <Skeleton
                                key={i}
                                className="h-12 rounded-xl"
                            />
                        ))}

                    {sessionsQuery.data?.map((session) => (
                        <div
                            key={session.id}
                            className={cn(
                                "group flex items-center gap-1 rounded-xl transition-colors hover:bg-muted",
                                sessionId === session.id && "bg-muted"
                            )}
                        >
                            <button
                                type="button"
                                onClick={() => onSelectSession(session.id)}
                                className="min-w-0 flex-1 rounded-xl px-3 py-2.5 text-left"
                            >
                                <p className="truncate text-sm font-medium">
                                    {session.title}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    {formatDistanceToNow(
                                        new Date(session.createdAt),
                                        { addSuffix: true }
                                    )}
                                </p>
                            </button>

                            {session.id !== originalSessionId && (
                                <button
                                    type="button"
                                    aria-label={`Delete ${session.title}`}
                                    title="Delete chat"
                                    disabled={deleteSession.isPending}
                                    onClick={() =>
                                        handleDelete(session.id, session.title)
                                    }
                                    className="mr-1 inline-flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-destructive/10 hover:text-destructive disabled:cursor-not-allowed disabled:opacity-50 md:opacity-0 md:group-hover:opacity-100 md:focus-visible:opacity-100"
                                >
                                    <Trash2 className="size-4" />
                                </button>
                            )}
                        </div>
                    ))}

                    {ready &&
                        sessionsQuery.isSuccess &&
                        sessionsQuery.data.length === 0 && (
                            <p className="px-2 text-xs text-muted-foreground">
                                No chats yet. Start one to begin.
                            </p>
                        )}
                </div>
            </ScrollArea>
        </aside>
    );
}