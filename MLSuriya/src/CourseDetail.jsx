import { Link, useParams } from "react-router-dom";

const courseData = {
  foundation: {
    title: "Foundation Course",
    subtitle: "Rishi · Samyak Drashti · Free · One-day course",
    duration: "1 Day",
    fees: "Free",
    level: "Rishi",
    focus: "Samyak Drashti (Holistic Vision)",
    whatYouLearn: [
      "Core principles of peaceful profit and dharmic clarity",
      "How to begin daily swadhyaya and meditation practice",
      "Introduction to the 4R framework for balanced growth",
      "Practical tools for calm decision-making in life and work"
    ]
  },
  crash: {
    title: "Crash Course",
    subtitle: "Muni-Sadhak · Rs 100 fee · 7 days · Up to 2 hours daily",
    duration: "7 Days (up to 2 hours daily)",
    fees: "Rs 100",
    level: "Muni-Sadhak",
    focus: "Guided consistency and disciplined inner practice",
    whatYouLearn: [
      "Structured daily meditation and reflection process",
      "Stress-free methods for professional and personal life",
      "Applying 4R in real decisions and relationships",
      "Habit-building tools to sustain peace and productivity"
    ]
  },
  kevalya: {
    title: "Kevalya — DIY Course",
    subtitle: "Yogeshwar · Arihant · 3-month deep course · Charges: contact mobile",
    duration: "3 Months",
    fees: "Contact on mobile",
    level: "Yogeshwar · Arihant",
    focus: "Deep self-driven transformation journey",
    whatYouLearn: [
      "Advanced self-guided dhyan and swadhyaya practices",
      "Inner mastery for leadership, purpose, and steady awareness",
      "Integration of spiritual insight with business excellence",
      "Long-form transformation framework for lasting results"
    ]
  }
};

export default function CourseDetail() {
  const { courseId } = useParams();
  const course = courseData[courseId];

  if (!course) {
    return (
      <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "2rem", background: "#f7f5fe" }}>
        <div style={{ maxWidth: 640, width: "100%", borderRadius: 20, padding: "2rem", background: "#fff", boxShadow: "0 16px 42px rgba(22,10,46,0.08)" }}>
          <h1 style={{ margin: 0, fontSize: "2rem", color: "#160a2e" }}>Course Not Found</h1>
          <p style={{ marginTop: "0.9rem", color: "#4a3a6a", lineHeight: 1.7 }}>
            The course you requested does not exist.
          </p>
          <Link to="/" style={{ display: "inline-block", marginTop: "1rem", color: "#5a2bc9", fontWeight: 600, textDecoration: "none" }}>
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", padding: "3.5rem 1.25rem", background: "linear-gradient(160deg,#f7f5fe 0%,#f2ecff 50%,#fdf7ff 100%)" }}>
      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        <Link to="/" style={{ display: "inline-block", marginBottom: "1.25rem", color: "#5a2bc9", fontWeight: 600, textDecoration: "none" }}>
          ← Back to Home
        </Link>

        <section style={{ borderRadius: 24, padding: "2rem", background: "rgba(255,255,255,0.86)", border: "1px solid rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", boxShadow: "0 20px 48px rgba(22,10,46,0.10)" }}>
          <p style={{ margin: 0, fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6b35c8", fontWeight: 700 }}>
            Course Details
          </p>
          <h1 style={{ margin: "0.7rem 0 0", fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.1, color: "#160a2e" }}>
            {course.title}
          </h1>
          <p style={{ marginTop: "0.8rem", color: "#5a4a79", lineHeight: 1.7 }}>{course.subtitle}</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "0.8rem", marginTop: "1.35rem" }}>
            <MetaCard label="Duration" value={course.duration} />
            <MetaCard label="Fees" value={course.fees} />
            <MetaCard label="Level" value={course.level} />
          </div>

          <div style={{ marginTop: "1.3rem", padding: "1rem", borderRadius: 14, background: "#f4efff", border: "1px solid #e3d8ff" }}>
            <p style={{ margin: 0, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b35c8", fontWeight: 700 }}>
              Focus Area
            </p>
            <p style={{ margin: "0.55rem 0 0", fontSize: "1rem", color: "#2b1260", fontWeight: 600 }}>{course.focus}</p>
          </div>

          <h2 style={{ margin: "1.6rem 0 0.8rem", fontSize: "1.2rem", color: "#160a2e" }}>What You Will Learn</h2>
          <ul style={{ margin: 0, paddingLeft: "1.1rem", color: "#4d3e69", lineHeight: 1.8 }}>
            {course.whatYouLearn.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

function MetaCard({ label, value }) {
  return (
    <div style={{ borderRadius: 12, padding: "0.85rem 0.95rem", background: "#fff", border: "1px solid #ece4ff" }}>
      <p style={{ margin: 0, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#7c67a2", fontWeight: 700 }}>
        {label}
      </p>
      <p style={{ margin: "0.35rem 0 0", color: "#2b1260", fontWeight: 600 }}>{value}</p>
    </div>
  );
}
