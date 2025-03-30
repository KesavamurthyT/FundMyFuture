// App.jsx
import React, { useState } from 'react';
import { BellIcon, BookOpenIcon, AcademicCap, CurrencyDollarIcon, DocumentTextIcon, UserIcon } from 'lucide-react';

function App() {
  // CSS styles as a JavaScript object
  const styles = {
    appContainer: {
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
    },
    header: {
      backgroundColor: '#1d4ed8',
      color: 'white',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    headerContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    portalTitle: {
      fontSize: '1.25rem',
      fontWeight: 700,
    },
    headerRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
    notificationContainer: {
      position: 'relative',
    },
    icon: {
      width: '1.5rem',
      height: '1.5rem',
      cursor: 'pointer',
    },
    notificationBadge: {
      position: 'absolute',
      top: '-0.25rem',
      right: '-0.25rem',
      backgroundColor: '#ef4444',
      color: 'white',
      borderRadius: '50%',
      width: '1rem',
      height: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.75rem',
    },
    userInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    userAvatar: {
      width: '2rem',
      height: '2rem',
      backgroundColor: '#3b82f6',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatarIcon: {
      width: '1.25rem',
      height: '1.25rem',
    },
    mainContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '1.5rem 1rem',
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      padding: '1.5rem',
      marginBottom: '1.5rem',
    },
    studentInfoContainer: {
      display: 'flex',
      flexDirection: 'column',
      '@media (min-width: 768px)': {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    },
    studentDetails: {},
    studentName: {
      fontSize: '1.25rem',
      fontWeight: 700,
      color: '#1f2937',
    },
    studentText: {
      color: '#4b5563',
    },
    scholarshipStatus: {
      marginTop: '1rem',
      '@media (min-width: 768px)': {
        marginTop: 0,
      },
    },
    statusBadge: {
      display: 'inline-block',
      padding: '0.25rem 0.75rem',
      backgroundColor: '#dcfce7',
      color: '#166534',
      borderRadius: '9999px',
      fontWeight: 500,
    },
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1.5rem',
      marginBottom: '1.5rem',
      '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      '@media (min-width: 1024px)': {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
    },
    summaryContent: {
      display: 'flex',
      alignItems: 'flex-start',
    },
    iconContainer: {
      padding: '0.75rem',
      borderRadius: '0.5rem',
      marginRight: '1rem',
    },
    blueContainer: {
      backgroundColor: '#dbeafe',
    },
    greenContainer: {
      backgroundColor: '#dcfce7',
    },
    purpleContainer: {
      backgroundColor: '#f3e8ff',
    },
    summaryIcon: {
      width: '1.5rem',
      height: '1.5rem',
    },
    blueIcon: {
      color: '#2563eb',
    },
    greenIcon: {
      color: '#16a34a',
    },
    purpleIcon: {
      color: '#9333ea',
    },
    summaryTitle: {
      fontSize: '1.125rem',
      fontWeight: 600,
      color: '#1f2937',
    },
    summarySubtitle: {
      color: '#4b5563',
    },
    amount: {
      fontSize: '1.5rem',
      fontWeight: 700,
      marginTop: '0.5rem',
    },
    blueText: {
      color: '#2563eb',
    },
    purpleText: {
      color: '#9333ea',
    },
    progressBarContainer: {
      width: '100%',
      backgroundColor: '#e5e7eb',
      borderRadius: '9999px',
      height: '0.625rem',
      marginTop: '0.75rem',
    },
    progressBar: (width) => ({
      backgroundColor: '#16a34a',
      height: '0.625rem',
      borderRadius: '9999px',
      width: width,
    }),
    progressText: {
      color: '#6b7280',
      fontSize: '0.875rem',
      marginTop: '0.25rem',
    },
    bottomGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1.5rem',
      '@media (min-width: 1024px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
    },
    sectionTitle: {
      fontSize: '1.125rem',
      fontWeight: 600,
      color: '#1f2937',
      marginBottom: '1rem',
    },
    notificationList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    notificationItem: (isUnread) => ({
      padding: '0.75rem',
      borderRadius: '0.5rem',
      border: '1px solid',
      borderColor: isUnread ? '#bfdbfe' : '#e5e7eb',
      backgroundColor: isUnread ? '#eff6ff' : 'transparent',
    }),
    notificationMessage: (isUnread) => ({
      color: isUnread ? '#1e40af' : '#1f2937',
      fontWeight: isUnread ? 500 : 'normal',
    }),
    notificationDate: {
      fontSize: '0.875rem',
      color: '#6b7280',
      marginTop: '0.25rem',
    },
    deadlineList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    deadlineItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0.75rem',
      border: '1px solid #e5e7eb',
      borderRadius: '0.5rem',
    },
    deadlineInfo: {
      display: 'flex',
      alignItems: 'flex-start',
    },
    deadlineIcon: {
      width: '1.25rem',
      height: '1.25rem',
      color: '#ef4444',
      marginRight: '0.5rem',
      marginTop: '0.125rem',
    },
    deadlineTitle: {
      fontWeight: 500,
      color: '#1f2937',
    },
    deadlineDate: {
      fontSize: '0.875rem',
      color: '#6b7280',
    },
    viewButton: {
      padding: '0.25rem 0.75rem',
      backgroundColor: '#2563eb',
      color: 'white',
      fontSize: '0.875rem',
      borderRadius: '0.25rem',
      border: 'none',
      cursor: 'pointer',
    },
    emptyMessage: {
      color: '#6b7280',
    }
  };

  const [studentData] = useState({
    name: "John Smith",
    id: "STD2024001",
    program: "Computer Science",
    scholarshipStatus: "Active",
    scholarshipName: "Tech Innovators Scholarship",
    scholarshipAmount: "$5,000",
    gpa: "3.8",
    completedCredits: "45",
    requiredCredits: "120",
    nextPaymentDate: "April 15, 2025",
    notifications: [
      { id: 1, message: "Your scholarship renewal form is due in 2 weeks", date: "March 28, 2025", read: false },
      { id: 2, message: "Spring semester payment processed successfully", date: "January 10, 2025", read: true },
    ],
    deadlines: [
      { id: 1, title: "Scholarship Application Deadline", date: "April 10, 2025" },
      { id: 2, title: "Course Registration Deadline", date: "April 20, 2025" },
    ]
  });

  const progressPercentage = `${(parseInt(studentData.completedCredits) / parseInt(studentData.requiredCredits)) * 100}%`;

  return (
    <div style={styles.appContainer}>
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <div style={styles.portalTitle}>Student Portal</div>
          <div style={styles.headerRight}>
            <div style={styles.notificationContainer}>
              <BellIcon style={styles.icon} />
              <div style={styles.notificationBadge}>2</div>
            </div>
            <div style={styles.userInfo}>
              <div style={styles.userAvatar}>
                <UserIcon style={styles.avatarIcon} />
              </div>
              <span>{studentData.name}</span>
            </div>
          </div>
        </div>
      </header>

      <div style={styles.mainContent}>
        <div style={styles.card}>
          <div style={styles.studentInfoContainer}>
            <div style={styles.studentDetails}>
              <div style={styles.studentName}>{studentData.name}</div>
              <div style={styles.studentText}>ID: {studentData.id}</div>
              <div style={styles.studentText}>Program: {studentData.program}</div>
            </div>
            <div style={styles.scholarshipStatus}>
              <span style={styles.statusBadge}>{studentData.scholarshipStatus}</span>
            </div>
          </div>
          <div style={styles.cardGrid}>
            <div style={styles.summaryContent}>
              <div style={{ ...styles.iconContainer, ...styles.blueContainer }}>
                <AcademicCap style={{ ...styles.summaryIcon, ...styles.blueIcon }} />
              </div>
              <div>
                <div style={styles.summaryTitle}>GPA</div>
                <div style={styles.summarySubtitle}>{studentData.gpa}</div>
              </div>
            </div>
            <div style={styles.summaryContent}>
              <div style={{ ...styles.iconContainer, ...styles.greenContainer }}>
                <CurrencyDollarIcon style={{ ...styles.summaryIcon, ...styles.greenIcon }} />
              </div>
              <div>
                <div style={styles.summaryTitle}>Scholarship Amount</div>
                <div style={styles.amount}>{studentData.scholarshipAmount}</div>
              </div>
            </div>
            <div style={styles.summaryContent}>
              <div style={{ ...styles.iconContainer, ...styles.purpleContainer }}>
                <BookOpenIcon style={{ ...styles.summaryIcon, ...styles.purpleIcon }} />
              </div>
              <div>
                <div style={styles.summaryTitle}>Progress</div>
                <div style={styles.progressBarContainer}>
                  <div style={styles.progressBar(progressPercentage)} />
                </div>
                <div style={styles.progressText}>{progressPercentage} completed</div>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.sectionTitle}>Notifications</div>
          <div style={styles.notificationList}>
            {studentData.notifications.length > 0 ? (
              studentData.notifications.map(notification => (
                <div key={notification.id} style={styles.notificationItem(notification.read)}>
                  <div style={styles.notificationMessage(notification.read)}>
                    {notification.message}
                  </div>
                  <div style={styles.notificationDate}>{notification.date}</div>
                </div>
              ))
            ) : (
              <div style={styles.emptyMessage}>No notifications at the moment.</div>
            )}
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.sectionTitle}>Upcoming Deadlines</div>
          <div style={styles.deadlineList}>
            {studentData.deadlines.map(deadline => (
              <div key={deadline.id} style={styles.deadlineItem}>
                <div style={styles.deadlineInfo}>
                  <DocumentTextIcon style={styles.deadlineIcon} />
                  <div>
                    <div style={styles.deadlineTitle}>{deadline.title}</div>
                    <div style={styles.deadlineDate}>{deadline.date}</div>
                  </div>
                </div>
                <button style={styles.viewButton}>View</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
