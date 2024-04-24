import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useState } from 'react'

export default function Home() {
  const [sleepHours, setSleepHours] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let content = '';
    if (sleepHours >= 9 && sleepHours <= 12) {
        content = 'While it\'s great to rest, too much sleep can also be a concern. Oversleeping has been linked to health issues such as diabetes and heart disease. Consider setting a consistent wake-up time and ensure you are engaging in enough physical and mental activities during the day.';
    } else if (sleepHours >= 7 && sleepHours < 9) {
        content = 'Great job! You got enough sleep last night. To further enhance your sleep quality, consider maintaining a regular sleep schedule and minimizing blue light exposure before bedtime. Engaging in relaxing activities such as reading or meditation before bed can also help.';
    } else if (sleepHours >= 5 && sleepHours < 7) {
        content = 'You might need more sleep to feel your best. Try to go to bed earlier and create a bedtime routine that promotes relaxation, such as turning off electronic devices an hour before bed and keeping your bedroom dark and cool.';
    } else if (sleepHours > 0 && sleepHours < 5) {
        content = 'It seems like you are not getting enough sleep. This can significantly affect your cognitive functions and overall health. Consider prioritizing sleep by avoiding caffeine late in the day and creating a calming pre-sleep routine.';
    } else if (sleepHours === 0) {
        content = 'Not getting any sleep is extremely detrimental to your health and well-being. If you are experiencing insomnia or other sleep disturbances, it might be beneficial to consult a healthcare provider.';
    } else {
        content = 'Please enter a valid number of hours. Sleep hours should be a positive number less than 24.';
    }
    setPopupContent(content);
    setShowPopup(true);
};

  return (
    <div className="container" style={{
      backgroundColor: '#1e1e1e',
      color: '#f1f1f1',
      textAlign: 'center',
    }}>
      <Head>
        <title>Sleep Tracker for College Students</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
          {`
            a {
              color: #8bc34a;
            }
            code {
              background-color: #333;
              color: #ccc;
            }
            .popup {
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background-color: white;
              color: black;
              padding: 20px;
              border-radius: 10px;
              display: ${showPopup ? 'block' : 'none'};
            }
            input[type='number'], button {
              width: 250px;
              padding: 10px;
              margin: 10px 0;
              border: 1px solid #ccc;
              border-radius: 5px;
              font-size: 1rem;
              color: #f1f1f1;
              background-color: #333;
            }
            button {
              background-color: #ff2a00;
              color: white;
              cursor: pointer;
              transition: background-color 0.3s;
            }
            button:hover {
              background-color: #7cb342;
            }
            .background-container {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              overflow: hidden;
              z-index: -1;
            }
            .background-image {
              width: 2000px;
              height: 1000px;
              background-image: url('/background.jpg');
              background-size: cover;
              animation: scrollBackground 60s linear infinite;
            }
            @keyframes scrollBackground {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}
        </style>
      </Head>

      <div className="background-container">
        <div className="background-image"></div>
      </div>

      <main>
        <Header title="Improve Your Sleep, Boost Your Success" />
        <section>
          <h2>Importance of Quality Sleep for College Students</h2>
          <p>As a college student, you're likely juggling a busy schedule of classes, extracurricular activities, and social life. In the midst of all this, getting enough quality sleep can be a real challenge. However, it's crucial to prioritize your sleep for the following reasons:</p>

          <h3>Academic Performance</h3>
          <p>Numerous studies have shown that poor sleep habits can negatively impact your academic performance. When you don't get enough sleep, it can be harder to focus, retain information, and perform well on exams and assignments. Quality sleep is essential for cognitive function, memory consolidation, and overall academic success.</p>

          <h3>Mental Health</h3>
          <p>Lack of sleep can also take a toll on your mental health. Sleep deprivation has been linked to increased stress, anxiety, and depression. Maintaining a healthy sleep schedule can help you better manage these mental health challenges and improve your overall well-being.</p>

          <h3>Overall Well-being</h3>
          <p>Beyond academics and mental health, poor sleep can also affect your physical health, energy levels, and immune system. Getting enough quality sleep is essential for your body to rest, repair, and recharge, allowing you to feel your best and tackle the demands of college life.</p>
        </section>

        <section>
          <h2>How Our Website Can Help</h2>
          <p>Our app is designed to help you compare your sleep with other users. By using our website, you can see how your sleep on that day compares to other users</p>

          <p>By taking advantage of our website's features, you can take proactive steps to improve your sleep and enjoy the many benefits it can bring to your academic, mental, and physical well-being.</p>
        </section>

        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
          <input
            type="number"
            value={sleepHours}
            onChange={(e) => setSleepHours(e.target.value)}
            placeholder="Enter hours of sleep"
            style={{ marginRight: '10px' }}
          />
          <button type="submit">Submit</button>
        </form>

        {showPopup && (
          <div className="popup">
            <p>{popupContent}</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        )}
      </main>

    </div>
  )
}