class EventDispatcher {
    dispatch (event, data) {
        console.log(data);
        const customEvent = new CustomEvent(event, {
            detail: data
        });

        dispatchEvent(customEvent);
    }
}