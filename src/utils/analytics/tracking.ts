interface TrackingEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

class Analytics {
  private queue: TrackingEvent[] = [];
  private isProcessing = false;

  track(event: TrackingEvent) {
    this.queue.push(event);
    this.processQueue();
  }

  private async processQueue() {
    if (this.isProcessing || this.queue.length === 0) return;

    this.isProcessing = true;
    const batch = this.queue.splice(0, 10);

    try {
      await fetch('/api/analytics/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(batch),
      });
    } catch (error) {
      console.error('Failed to send analytics:', error);
      this.queue.unshift(...batch);
    } finally {
      this.isProcessing = false;
      if (this.queue.length > 0) {
        setTimeout(() => this.processQueue(), 1000);
      }
    }
  }
}

export const analytics = new Analytics();