class EventDispatcher {
    dispatch (event, data) {
        const customEvent = new CustomEvent(event, {
            detail: data
        });

        dispatchEvent(customEvent);
    }
}