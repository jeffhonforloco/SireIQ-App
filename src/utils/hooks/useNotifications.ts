import { useState, useEffect } from 'react';
import { storage } from '../persistence/storage';

interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  timestamp: number;
}

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  async function loadNotifications() {
    const stored = await storage.get<Notification[]>('notifications');
    if (stored) {
      setNotifications(stored);
    }
  }

  async function addNotification(notification: Omit<Notification, 'id' | 'timestamp'>) {
    const newNotification = {
      ...notification,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
    };

    const updated = [newNotification, ...notifications].slice(0, 10);
    setNotifications(updated);
    await storage.set('notifications', updated);
  }

  async function removeNotification(id: string) {
    const updated = notifications.filter(n => n.id !== id);
    setNotifications(updated);
    await storage.set('notifications', updated);
  }

  async function clearNotifications() {
    setNotifications([]);
    await storage.set('notifications', []);
  }

  return {
    notifications,
    addNotification,
    removeNotification,
    clearNotifications,
  };
}