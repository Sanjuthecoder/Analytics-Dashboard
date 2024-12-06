import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const websiteAnalytics = {
    visitors: [
        { month: 'Jan', total: 5420, unique: 3210 },
        { month: 'Feb', total: 6150, unique: 3650 },
        { month: 'Mar', total: 7230, unique: 4320 },
        { month: 'Apr', total: 8540, unique: 5120 },
        { month: 'May', total: 9870, unique: 5890 }
    ],
    conversions: [
        { month: 'Jan', leads: 152, converted: 45, rate: 29.6 },
        { month: 'Feb', leads: 186, converted: 58, rate: 31.2 },
        { month: 'Mar', leads: 224, converted: 72, rate: 32.1 },
        { month: 'Apr', leads: 267, converted: 89, rate: 33.3 },
        { month: 'May', leads: 312, converted: 108, rate: 34.6 }
    ],
    trafficSources: [
        { name: 'Organic Search', value: 42 },
        { name: 'Direct', value: 28 },
        { name: 'Referral', value: 18 },
        { name: 'Social Media', value: 12 }
    ]
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AnalyticsDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="p-6 bg-gray-50">
            <h1 className="text-3xl font-bold mb-6">House of Mark Tech Analytics</h1>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-3 mb-6">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="traffic">Traffic</TabsTrigger>
                    <TabsTrigger value="conversions">Conversions</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader><CardTitle>Monthly Visitors</CardTitle></CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={websiteAnalytics.visitors}>
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="total" stroke="#8884d8" />
                                        <Line type="monotone" dataKey="unique" stroke="#82ca9d" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader><CardTitle>Traffic Sources</CardTitle></CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <PieChart>
                                        <Pie
                                            data={websiteAnalytics.trafficSources}
                                            dataKey="value"
                                            nameKey="name"
                                            innerRadius={60}
                                            outerRadius={90}
                                            fill="#8884d8"
                                        >
                                            {websiteAnalytics.trafficSources.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="traffic">
                    <Card>
                        <CardHeader><CardTitle>Detailed Traffic Analytics</CardTitle></CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={400}>
                                <BarChart data={websiteAnalytics.visitors}>
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="total" fill="#8884d8" name="Total Visitors" />
                                    <Bar dataKey="unique" fill="#82ca9d" name="Unique Visitors" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="conversions">
                    <Card>
                        <CardHeader><CardTitle>Conversion Performance</CardTitle></CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={400}>
                                <LineChart data={websiteAnalytics.conversions}>
                                    <XAxis dataKey="month" />
                                    <YAxis yAxisId="left" />
                                    <YAxis yAxisId="right" orientation="right" />
                                    <Tooltip />
                                    <Legend />
                                    <Line yAxisId="left" type="monotone" dataKey="leads" stroke="#8884d8" name="Leads" />
                                    <Line yAxisId="left" type="monotone" dataKey="converted" stroke="#82ca9d" name="Conversions" />
                                    <Line yAxisId="right" type="monotone" dataKey="rate" stroke="#ffc658" name="Conversion Rate (%)" />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default AnalyticsDashboard;