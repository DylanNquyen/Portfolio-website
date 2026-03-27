"use client"

import { Award, Code2, Trophy } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const content = {
  en: {
    section: "01. About Me",
    heading: "Background",
    bio1: (
      <>
        I&apos;m a Software Engineering student at{" "}
        <span className="text-foreground font-medium">HUTECH</span> with a passion for
        crafting pixel-perfect, accessible user interfaces. My journey in web development
        started 3 years ago, and since then, I&apos;ve built over 10 web projects ranging
        from corporate websites to complex SPAs.
      </>
    ),
    bio2: (
      <>
        I specialize in <span className="text-primary">React.js</span>,{" "}
        <span className="text-primary">Vue 3</span>, and{" "}
        <span className="text-primary">TypeScript</span>, with a strong focus on
        performance optimization, clean architecture, and responsive design. I believe in
        writing code that is not only functional but also maintainable and scalable.
      </>
    ),
    bio3: "When I'm not coding, you can find me exploring new technologies, playing badminton or Sepak takraw, enjoying music, or competing in e-sports. I'm always eager to learn and take on new challenges.",
    recognition: "Recognition",
    award1: "Outstanding Student Award",
    award1sub: "Faculty of IT, HUTECH (2025)",
    award2: "IT Got Talent - Finalist",
    award2sub: "HUTECH 10th Edition (2025)",
    certifications: "Certifications",
    lang: "Languages",
    edu: "Education",
    eduSub: "Software Engineering, 2022 - 2026",
  },
  vi: {
    section: "01. Giới thiệu",
    heading: "Về tôi",
    bio1: (
      <>
        Tôi là sinh viên Kỹ thuật Phần mềm tại{" "}
        <span className="text-foreground font-medium">HUTECH</span>, đam mê xây dựng
        giao diện người dùng pixel-perfect và dễ tiếp cận. Hành trình phát triển web của
        tôi bắt đầu 3 năm trước, và từ đó tôi đã xây dựng hơn 10 dự án web từ website
        doanh nghiệp đến SPA phức tạp.
      </>
    ),
    bio2: (
      <>
        Tôi chuyên về <span className="text-primary">React.js</span>,{" "}
        <span className="text-primary">Vue 3</span> và{" "}
        <span className="text-primary">TypeScript</span>, tập trung vào tối ưu hiệu
        suất, kiến trúc sạch và thiết kế responsive. Tôi tin vào việc viết code không
        chỉ hoạt động tốt mà còn dễ bảo trì và mở rộng.
      </>
    ),
    bio3: "Khi không code, bạn có thể thấy tôi khám phá công nghệ mới, chơi cầu lông hoặc đá cầu, nghe nhạc, hoặc thi đấu e-sports. Tôi luôn háo hức học hỏi và đón nhận thử thách mới.",
    recognition: "Thành tích",
    award1: "Sinh viên Xuất sắc",
    award1sub: "Khoa CNTT, HUTECH (2025)",
    award2: "IT Got Talent - Top Finalist",
    award2sub: "HUTECH Lần thứ 10 (2025)",
    certifications: "Chứng chỉ",
    lang: "Ngôn ngữ",
    edu: "Học vấn",
    eduSub: "Kỹ thuật Phần mềm, 2022 - 2026",
  },
}

export function About() {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <section id="about" className="py-24 px-6 bg-card/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-primary font-mono text-sm mb-2">{t.section}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t.heading}</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">{t.bio1}</p>
            <p className="text-muted-foreground leading-relaxed text-lg">{t.bio2}</p>
            <p className="text-muted-foreground leading-relaxed text-lg">{t.bio3}</p>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">{t.recognition}</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">{t.award1}</p>
                    <p className="text-muted-foreground">{t.award1sub}</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Code2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">{t.award2}</p>
                    <p className="text-muted-foreground">{t.award2sub}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <h3 className="font-semibold text-foreground mb-4">{t.certifications}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex justify-between">
                  <span>CEF B1</span>
                  <span className="text-foreground">Dec 2025</span>
                </li>
                <li className="flex justify-between">
                  <span>{language === "en" ? "Communication & Teamwork Excellence" : "Xuất sắc Giao tiếp & Làm việc nhóm"}</span>
                  <span className="text-foreground">Aug 2025</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
