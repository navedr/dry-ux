import * as React from "react";

/**
 * Hook that makes a modal dialog draggable by its header.
 * Finds the modal via the .draggable CSS class, attaches mousedown to .modal-header,
 * and applies transform: translate() to the .modal-dialog element.
 *
 * @param enabled - Whether dragging is enabled.
 * @param shown - Current shown state; position resets when modal reopens.
 * @param modalClass - Unique CSS class on the modal to identify it.
 */
export const useDraggable = (enabled: boolean, shown: boolean, modalClass: string) => {
    const cleanupRef = React.useRef<() => void>(null);

    React.useEffect(() => {
        if (cleanupRef.current) {
            cleanupRef.current();
            cleanupRef.current = null;
        }

        if (!enabled || !shown) return;

        // Defer to next frame to ensure portal DOM is committed
        const raf = requestAnimationFrame(() => {
            const modal = document.querySelector(`.${modalClass}`);
            const dialog = modal?.querySelector(".modal-dialog") as HTMLElement;
            const header = dialog?.querySelector(".modal-header") as HTMLElement;
            if (!dialog || !header) return;

            const offset = { x: 0, y: 0 };
            const startPos = { x: 0, y: 0 };
            let dragging = false;

            dialog.style.setProperty("transform", "none", "important");

            const onMouseDown = (e: MouseEvent) => {
                if ((e.target as HTMLElement).closest(".close")) return;

                dragging = true;
                startPos.x = e.clientX - offset.x;
                startPos.y = e.clientY - offset.y;
                header.classList.add("dragging");
                e.preventDefault();
            };

            const onMouseMove = (e: MouseEvent) => {
                if (!dragging) return;
                offset.x = e.clientX - startPos.x;
                offset.y = e.clientY - startPos.y;
                dialog.style.setProperty("transform", `translate(${offset.x}px, ${offset.y}px)`, "important");
            };

            const onMouseUp = () => {
                if (!dragging) return;
                dragging = false;
                header.classList.remove("dragging");
            };

            header.addEventListener("mousedown", onMouseDown);
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);

            cleanupRef.current = () => {
                header.removeEventListener("mousedown", onMouseDown);
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
            };
        });

        return () => {
            cancelAnimationFrame(raf);
            if (cleanupRef.current) {
                cleanupRef.current();
                cleanupRef.current = null;
            }
        };
    }, [enabled, shown, modalClass]);
};
