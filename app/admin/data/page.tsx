'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Mail, Download } from 'lucide-react';
import PasswordProtection from '@/components/PasswordProtection';

interface Newsletter {
  id: string;
  email: string;
  firstName: string;
  subscribedAt: string;
  source: string;
  isActive: boolean;
}

export default function AdminDataPage() {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const newslettersResponse = await fetch('/api/newsletter').then(res => res.json());

      if (!newslettersResponse.success) {
        console.error('Error fetching newsletters:', newslettersResponse.error);
      }

      setNewsletters(newslettersResponse.data?.map((sub: any) => ({
        ...sub,
        firstName: sub.first_name,
        subscribedAt: sub.subscribed_at,
        isActive: sub.is_active
      })) || []);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = (data: any[], filename: string) => {
    if (data.length === 0) return;

    const headers = Object.keys(data[0]);
    const csvContent = [
      headers.join(','),
      ...data.map(row => headers.map(header =>
        JSON.stringify(row[header] || '')
      ).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-slate-600">Loading data...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <PasswordProtection>
      <div className="min-h-screen bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Data Collection Dashboard</h1>
            <p className="text-slate-600">View and export newsletter subscriptions</p>
          </div>

        {/* Lead Submissions */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Lead Submissions</h2>
          <p className="text-slate-600">
            All lead submissions are now managed in{' '}
            <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Formspree Dashboard
            </a>. Log in to view, export, and manage all contact form and quote submissions.
          </p>
        </div>

        {/* Newsletter Subscriptions */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center">
              <Mail className="w-6 h-6 mr-2 text-blue-600" />
              Newsletter Subscriptions ({newsletters.filter(n => n.isActive).length})
            </CardTitle>
            <Button
              onClick={() => exportToCSV(newsletters.filter(n => n.isActive), 'newsletter-subscribers.csv')}
              className="bg-slate-900 hover:bg-slate-800"
              disabled={newsletters.length === 0}
            >
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </CardHeader>
          <CardContent>
            {newsletters.length === 0 ? (
              <p className="text-slate-600 text-center py-8">No newsletter subscribers yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-2">First Name</th>
                      <th className="text-left py-3 px-2">Email</th>
                      <th className="text-left py-3 px-2">Source</th>
                      <th className="text-left py-3 px-2">Status</th>
                      <th className="text-left py-3 px-2">Subscribed Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newsletters.map((sub) => (
                      <tr key={sub.id} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-3 px-2 font-medium">{sub.firstName}</td>
                        <td className="py-3 px-2">{sub.email}</td>
                        <td className="py-3 px-2 capitalize">{sub.source.replace('_', ' ')}</td>
                        <td className="py-3 px-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            sub.isActive ? 'bg-slate-100 text-slate-900' : 'bg-red-100 text-red-800'
                          }`}>
                            {sub.isActive ? 'Active' : 'Unsubscribed'}
                          </span>
                        </td>
                        <td className="py-3 px-2">{formatDate(sub.subscribedAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
        </div>
      </div>
    </PasswordProtection>
  );
}
