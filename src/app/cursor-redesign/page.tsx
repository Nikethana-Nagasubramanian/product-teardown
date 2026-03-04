'use client'

import { useState } from 'react'
import './styles.css'

export default function CursorRedesign() {
    const [isOnDemand, setIsOnDemand] = useState(false)
    const [activeTimeTab, setActiveTimeTab] = useState('30d')

    return (
        <div className="cursor_redesign_root">
            {/* Redesign Sidebar */}
            <aside className="cursor_sidebar">
                <div className="sidebar-logo">
                    <div className="logo-mark">↗</div>
                    <span className="logo-name">Cursor</span>
                </div>

                <div className="sidebar-section">
                    <div className="sidebar-label">Workspace</div>
                    <a className="nav-item" href="#">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.5" /><rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.5" /><rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.5" /><rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.5" /></svg>
                        Overview
                    </a>
                    <a className="nav-item" href="#">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5.5" stroke="currentColor" stroke-width="1.5" /><path d="M8 5v3l2 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /></svg>
                        Agents
                    </a>
                    <a className="nav-item" href="#">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 2L2 6v8h12V6L8 2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /></svg>
                        Cloud Agents
                    </a>
                </div>

                <div className="sidebar-section">
                    <div className="sidebar-label">Account</div>
                    <a className="nav-item active" href="#">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 12V11C2 9.343 3.343 8 5 8H11C12.657 8 14 9.343 14 11V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><circle cx="8" cy="4.5" r="2.5" stroke="currentColor" stroke-width="1.5" /></svg>
                        Usage & Spending
                    </a>
                    <a className="nav-item" href="#">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="2" y="4" width="12" height="9" rx="1.5" stroke="currentColor" stroke-width="1.5" /><path d="M5 4V3C5 2.448 5.448 2 6 2H10C10.552 2 11 2.448 11 3V4" stroke="currentColor" stroke-width="1.5" /></svg>
                        Billing & Invoices
                    </a>
                    <a className="nav-item" href="#">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 2a6 6 0 100 12A6 6 0 008 2z" stroke="currentColor" stroke-width="1.5" /><path d="M8 6v2l1.5 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /></svg>
                        Settings
                    </a>
                </div>
            </aside>

            {/* Main content */}
            <main className="cursor_main text-[#101828]">
                <div className="page-header">
                    <h1 className="page-title text-[28px] font-bold">Cursor Usage & Spending</h1>
                    <p className="page-description text-[#667085] leading-relaxed max-w-2xl mt-2">
                        Redesigning Cursor's usage dashboard to prioritize clarity and transparency.
                        Detailed tracking of token consumption across models with clean visual hierarchies
                        and proactive limit management.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                        <span className="cycle-badge bg-[#F2F4F7] text-[#475467] px-3 py-1 rounded-full text-[12px] font-medium border border-[#EAECF0]">Cycle: Feb 01 – Mar 01</span>
                        <span className="text-[12px] text-[#667085]">resets in 25 days</span>
                    </div>
                </div>

                {/* Summary cards */}
                <div className="cards">
                    <div className="card">
                        <div className="card-label">Tokens Used</div>
                        <div className="card-value">2.6M</div>
                        <div className="card-sub">of ~5M included this cycle</div>
                    </div>
                    <div className="card">
                        <div className="card-label">Included Value Used</div>
                        <div className="card-value green">$3.46</div>
                        <div className="card-sub">covered by your Pro plan</div>
                    </div>
                    <div className="card">
                        <div className="card-label">On-Demand Charges</div>
                        <div className="card-value">$0.00</div>
                        <div className="card-sub">on-demand is off</div>
                    </div>
                </div>

                {/* Usage meter */}
                <div className="meter-card">
                    <div className="meter-header">
                        <span className="meter-title">Included Usage</span>
                        <span className="meter-reset">Resets Mar 01</span>
                    </div>

                    <div className="meter-bar-wrap">
                        <div className="meter-bar ok" style={{ width: '52%' }}></div>
                    </div>
                    <div className="meter-labels">
                        <span className="meter-used">2.6M tokens used</span>
                        <span className="meter-total">~5M total included</span>
                    </div>

                    <div className="model-meters">
                        <div className="model-row">
                            <div className="model-name-row">
                                <span className="model-name">claude-opus · high-thinking</span>
                                <span className="model-pct">96%</span>
                            </div>
                            <div className="model-bar-wrap"><div className="model-bar primary" style={{ width: '96%' }}></div></div>
                        </div>
                        <div className="model-row">
                            <div className="model-name-row">
                                <span className="model-name">gemini-3-flash-preview</span>
                                <span className="model-pct">4%</span>
                            </div>
                            <div className="model-bar-wrap"><div className="model-bar secondary" style={{ width: '4%' }}></div></div>
                        </div>
                    </div>
                </div>

                {/* On-demand toggle */}
                <div className={`toggle-card ${isOnDemand ? 'enabled' : ''}`}>
                    <div className="toggle-info">
                        <div className="toggle-title">
                            On-Demand Usage
                            <span className={`badge ${isOnDemand ? 'badge-included' : 'badge-ondemand'}`}>
                                {isOnDemand ? 'On' : 'Off'}
                            </span>
                        </div>
                        <div className="toggle-desc">When your included quota runs out, usage pauses. Enable on-demand to keep working — you'll be billed for overages at the end of the cycle. Set a monthly cap so you're never surprised.</div>
                    </div>
                    <div className="toggle-right">
                        <div className="cap-input-wrap">
                            <span>Cap at</span>
                            <input className="cap-input" defaultValue="$25" placeholder="$0" />
                            <span>/ mo</span>
                        </div>
                        <div
                            className={`toggle-switch ${isOnDemand ? 'on' : ''}`}
                            onClick={() => setIsOnDemand(!isOnDemand)}
                        ></div>
                    </div>
                </div>

                {/* Activity log */}
                <div className="table-card">
                    <div className="table-header">
                        <span className="table-title">Activity Log</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div className="time-tabs">
                                {['1d', '7d', '30d'].map(tab => (
                                    <div
                                        key={tab}
                                        className={`time-tab ${activeTimeTab === tab ? 'active' : ''}`}
                                        onClick={() => setActiveTimeTab(tab)}
                                    >
                                        {tab}
                                    </div>
                                ))}
                            </div>
                            <button className="export-btn">
                                <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 2v9M5 8l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M3 13h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /></svg>
                                Export CSV
                            </button>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Model</th>
                                <th>Type</th>
                                <th style={{ textAlign: 'right' }}>Tokens</th>
                                <th style={{ textAlign: 'right' }}>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="td-date">Feb 19, 1:16 PM</td>
                                <td className="td-model">claude-opus-high-thinking</td>
                                <td><span className="badge badge-included">Included</span></td>
                                <td className="td-tokens">1.2M</td>
                                <td className="td-cost cost-included">$1.48 included</td>
                            </tr>
                            <tr>
                                <td className="td-date">Feb 19, 1:11 PM</td>
                                <td className="td-model">claude-opus-high-thinking</td>
                                <td><span className="badge badge-included">Included</span></td>
                                <td className="td-tokens">130.7K</td>
                                <td className="td-cost cost-included">$0.53 included</td>
                            </tr>
                            <tr>
                                <td className="td-date">Feb 19, 11:39 AM</td>
                                <td className="td-model">claude-opus-high-thinking</td>
                                <td><span className="badge badge-included">Included</span></td>
                                <td className="td-tokens">655.6K</td>
                                <td className="td-cost cost-included">$0.78 included</td>
                            </tr>
                            <tr>
                                <td className="td-date">Feb 18, 8:50 PM</td>
                                <td className="td-model">claude-opus-high-thinking</td>
                                <td><span className="badge badge-included">Included</span></td>
                                <td className="td-tokens">87.5K</td>
                                <td className="td-cost cost-included">$0.22 included</td>
                            </tr>
                            <tr>
                                <td className="td-date">Feb 18, 8:44 PM</td>
                                <td className="td-model">claude-opus-high-thinking</td>
                                <td><span className="badge badge-included">Included</span></td>
                                <td className="td-tokens">63.2K</td>
                                <td className="td-cost cost-included">$0.07 included</td>
                            </tr>
                            <tr>
                                <td className="td-date">Feb 18, 8:42 PM</td>
                                <td className="td-model">claude-opus-high-thinking</td>
                                <td><span className="badge badge-included">Included</span></td>
                                <td className="td-tokens">205.2K</td>
                                <td className="td-cost cost-included">$0.37 included</td>
                            </tr>
                            <tr>
                                <td className="td-date">Feb 18, 10:20 AM</td>
                                <td className="td-model">gemini-3-flash-preview</td>
                                <td><span className="badge badge-included">Included</span></td>
                                <td className="td-tokens">168.4K</td>
                                <td className="td-cost cost-included">$0.09 included</td>
                            </tr>
                            <tr>
                                <td className="td-date">Feb 12, 12:18 PM</td>
                                <td className="td-model">claude-opus-high-thinking</td>
                                <td><span className="badge badge-included">Included</span></td>
                                <td className="td-tokens">79.8K</td>
                                <td className="td-cost cost-included">$0.27 included</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}
