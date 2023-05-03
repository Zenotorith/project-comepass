import { useState } from 'react'
import avatar1 from '../assets/avatar-1.png'
import avatar2 from '../assets/avatar-2.png'
import cover from '../assets/cover.png'

const About = () => {
  const [colapse1, setColapse1] = useState(false)
  const [colapse2, setColapse2] = useState(false)
  return (
    <section className='text-gray-600 body-font font-[Roboto]'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='xl:w-1/2 lg:w-3/4 w-full mx-auto text-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            className='inline-block w-8 h-8 text-gray-400 mb-8'
            viewBox='0 0 975.036 975.036'
          >
            <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
          </svg>
          <p className='leading-relaxed text-lg'>
            Với tầm nhìn khởi tạo những trải nghiệm học tiếng Anh độc đáo, trung tâm COMEPASS cung cấp phương pháp học
            tập cá nhân hoá thông qua sự kết hợp của 3 phương châm: “COmmunication", “ME-focused” và “PASS”.
          </p>
          <span className='inline-block h-1 w-10 rounded bg-[#2694d1] mt-8 mb-6'></span>
          <h2 className='text-gray-900 font-medium title-font tracking-wider text-sm'>COMEPASS</h2>
          <p className='text-gray-500'>Tổ chức Giáo dục Anh ngữ</p>
          <p className='leading-relaxed text-lg mt-10'>
            Bên cạnh đó, trung tâm mong muốn học viên có khả năng phản xạ thường xuyên trong môi trường học sôi nổi, bởi
            chúng mình tin rằng COMEPASS sẽ là người đồng hành cùng bạn trong hành trình học tiếng Anh hiệu quả.
            <br />
            <br />
            Tầm nhìn của COMEPASS là đem đến trải nghiệm học tiếng Anh giúp tất cả mọi người đạt được ước mơ của mình.
            Chúng mình cũng tin rằng, trải nghiệm không chỉ nằm ở phương pháp dạy và học, mà còn hiện hữu trong việc
            không ngừng lan toả giá trị đến cộng đồng và xã hội.
            <br />
            <br />
            COMEPASS thấu hiểu chi phí học tiếng Anh nói chung hay IELTS nói riêng hiện nay tuy đã đa dạng để phù hợp
            với túi tiền của các bạn học sinh, nhưng vẫn là nỗi đắn đo với một số bạn khi phải bỏ ra một khoản lớn cho
            việc học thêm một chứng chỉ tiếng Anh khác. Do đó, CHƯƠNG TRÌNH HỌC BỔNG “5 VÌ 1” ra đời với mục tiêu tạo cơ
            hội cho các bạn sinh viên có hoàn cảnh khó khăn có thể tiếp cận đến học IETLS.
            <br />
            <br />
            Cứ 5 học sinh tham gia khoá học IELTS chính thức, COMEPASS sẽ trao 1 suất học bổng trị giá 15 triệu VNĐ đến
            với các bạn học sinh kém may mắn nhưng có tinh thần ham học tiếng Anh. Qua chương trình này, COMEPASS hy
            vọng đóng góp một phần giá trị đến cộng đồng và xã hội.
            <br />
            <br />
            Các bạn hãy cùng chung tay giúp lan tỏa giá trị này bằng cách CHIA SẺ bài viết hoặc giới thiệu nhóm bạn thân
            cùng tham gia khoá học IELTS tại COMEPASS. Càng nhiều lượt đăng kí, COMEPASS càng có thể giúp thêm nhiều bạn
            khác và tiến gần hơn đến giá trị bền vững cho cộng đồng và xã hội!❤️
          </p>
        </div>
      </div>
      <div className='container px-5 py-24 mx-auto flex flex-col'>
        <div className='lg:w-4/6 mx-auto'>
          <div className='rounded-lg h-64 overflow-hidden'>
            <img alt='content' className='object-cover object-center h-full w-full' src={cover} />
          </div>
          <div className='flex flex-col sm:flex-row mt-10'>
            <div className='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
              <img
                src={avatar1}
                className='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400'
              />
              <div className='flex flex-col items-center text-center justify-center'>
                <h2 className='font-medium title-font mt-4 text-gray-900 text-lg'>Mr. Carlson</h2>
                <p className=' mt-1 text-gray-900 text-sm'>Thạc sĩ Giáo dục</p>
                <div className='w-12 h-1 bg-[#2694d1] rounded mt-2 mb-4'></div>
                <p className='text-base'>Người giỏi tiếng Anh luôn sớm tìm ra trọng tâm và phương pháp học hiệu quả.</p>
              </div>
            </div>
            <div className='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
              <p className='leading-relaxed text-lg mb-4'>
                HÀNH TRÌNH CEO COMEPASS: “TỪ CHUYÊN GIA GIÁO DỤC ĐÀO TẠO ĐẾN NGƯỜI TRUYỀN LỬA HỌC TẬP” COMEPASS được ra
                đời với triết lí: "Sự khác biệt cốt lõi giữa thành công và thất bại trong việc học tiếng Anh chính là:
                người học giỏi tiếng Anh luôn sớm tìm ra trọng tâm và phương pháp học hiệu quả." Đây cũng chính là giá
                trị mà Mr. Carlson - CEO kiêm Giám đốc đào tạo COMEPASS luôn nung nấu trong suốt thời gian làm nghề giáo
                dục và đào tạo đến khi thành lập ra trung tâm học tiếng Anh của mình.
                <span className={`max-h-0 overflow-hidden inline-block ${colapse1 ? 'max-h-[60rem]' : ''}`}>
                  <br />
                  <br />
                  🔹 Kinh nghiệm giảng dạy và đào tạo Thầy Carlson xuất thân là một người có đam mê với ngôn ngữ và công
                  việc giảng dạy. Từng là phó chủ nhiệm CLB Tiếng Anh của Nhà Văn Hóa Thanh Niên - một trong những CLB
                  Tiếng Anh nổi tiếng và lâu đời tại TP. HCM. Đồng thời, thầy có kinh nghiệm lâu năm trong lĩnh vực đào
                  tạo, xây dựng khung chương trình và giảng dạy ngôn ngữ tại nhiều trường học như: Ngoại ngữ Không Gian
                  (Outer Space Language School), Anh Văn Hội Việc Mỹ (VUS), Trường THPT Quốc Tế Việt Úc (Saigon
                  International College), Trường Quốc Tế Canada (The Canadian International School), Trường mầm non quốc
                  tế Canada (Maple Bear International Kindergarten), học viện đào tạo VMP Academy. Thầy Carlson theo học
                  và tốt nghiệp bằng Thạc sĩ Giáo dục tại trường đại học Victoria (UVIC) tại Canana. Hiện tại, thầy đang
                  công tác tại ILAC International College (Canada) với vai trò tuyển dụng, đào tạo và quản lý giáo viên.
                  Ngoài kinh nghiệm đào tạo nhiều thế hệ giảng viên thì thầy cũng có kinh nghiệm giảng dạy cho nhiều đối
                  tượng học viên khác nhau từ trẻ em đến sinh viên, người lớn và doanh nghiệp. Vì vậy thầy luôn hiểu rõ
                  và đưa ra phương pháp học tập phù hợp cho từng đối tượng học viên.
                  <br />
                  <br />
                  🔹 Từ thấu hiểu nỗi đau đến COMEPASS Thầy Carlson đã có những trải nghiệm cho bản thân khi du học nơi
                  đất khách quê người, và một nỗi đau thầy nhận thức được ở người Việt không khác chính là ngôn ngữ, mà
                  ở đây là tiếng Anh. Chính gánh nặng này đã và đang ngăn cản không ít cá nhân tiếp xúc đến những cơ hội
                  đổi mới như học tập và định cư. Từ tâm tư và trách nhiệm của một người giáo dục, thầy ra đời đứa con
                  tâm huyết của mình - trung tâm anh ngữ COMEPASS. Với vốn kiến thức và kinh nghiệm dày dặn, hàng trăm
                  học viên của thầy đã có những bước tiến ngoạn mục, góp phần thực hiện hóa ước mơ tưởng chừng xa vời.
                  Những “trái ngọt” thầy đã gieo, là động lực và niềm tin cho sự phát triển của COMEPASS để luôn lan tỏa
                  những giá trị tích cực cho cộng đồng nói riêng và thế hệ Việt nói chung.
                </span>
              </p>
              <a
                onClick={() => setColapse1((prev) => !prev)}
                className='text-[#2694d1] inline-flex items-center cursor-pointer'
              >
                Learn More
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='container px-5 pb-24 mx-auto flex flex-col'>
        <div className='lg:w-4/6 mx-auto'>
          <div className='flex flex-col sm:flex-row mt-10'>
            <div className='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
              <img
                src={avatar2}
                className='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400'
              />
              <div className='flex flex-col items-center text-center justify-center'>
                <h2 className='font-medium title-font mt-4 text-gray-900 text-lg'>Mr. Sean</h2>
                <p className=' mt-1 text-gray-900 text-sm'>Thạc sĩ Khoa học tự nhiên</p>
                <p className=' mt-1 text-gray-900 text-sm'>Thạc sĩ Quản trị kinh doanh</p>
                <div className='w-12 h-1 bg-[#facd0e] rounded mt-2 mb-4'></div>
                <p className='text-base'>Từ quản lý tại tập đoàn đa quốc gia đến nhà giáo dục trẻ đầy tâm huyết.</p>
              </div>
            </div>
            <div className='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
              <p className='leading-relaxed text-lg mb-4'>
                HÀNH TRÌNH CEO COMEPASS: TỪ QUẢN LÝ TẠI TẬP ĐOÀN ĐA QUỐC GIA ĐẾN NHÀ GIÁO DỤC TRẺ ĐẦY T M HUYẾT COMEPASS
                được ra đời với triết lí: "Sự khác biệt cốt lõi giữa thành công và thất bại trong việc học tiếng Anh
                chính là: người học giỏi tiếng Anh luôn sớm tìm ra trọng tâm và phương pháp học hiệu quả." Chính giá trị
                này đã theo chân thầy Trần Xuân Lĩnh trong hành trình từ học tập và thành công đến thành lập COMEPASS.
                <span className={`max-h-0 overflow-hidden inline-block ${colapse2 ? 'max-h-[60rem]' : ''}`}>
                  <br />
                  <br />
                  🔹 Con đường đến với tập đoàn đa quốc gia Thầy Trần Xuân Lĩnh, xuất thân là một người con ưu tú của
                  thành phố mộng mơ - Đà Lạt, thầy sở hữu hai học vị: Thạc sĩ Khoa học Tự nhiên tại IÉSEG School of
                  Management và thạc sĩ Quản trị Kinh doanh tại CFVG School of Management. Sau khi về Việt Nam, thầy lựa
                  chọn theo đuổi lĩnh vực Marketing và xuất sắc đứng trong hàng ngũ Quản trị viên tập sự tại tập đoàn
                  Suntory PepsiCo. Nhiều năm sau đó, thầy tiếp tục hoạt động trong lĩnh vực Marketing tại các tập đoàn
                  lớn khác như: Frieslandcampina, Food Empire Singapore, Perfetti Van Melle Việt Nam.
                  <br />
                  <br />
                  🔹 Biến cố mới, tầm nhìn mới Tháng 8 năm 2021, đại dịch Covid-19 đã khiến nhiều người Việt Nam phải từ
                  bỏ công việc và con đường học tập của họ. Giữa bối cảnh xã hội đầy khó khăn ấy, thầy Trần Xuân Lĩnh đã
                  nhận ra một giá trị quan trọng trong cuộc sống: cách duy nhất để chúng ta vượt qua nghịch cảnh chính
                  là trau dồi bản thân để trở thành phiên bản tốt hơn mỗi ngày. Được thôi thúc bằng lòng trắc ẩn và sự
                  nhận thức về giá trị của giáo dục, thầy quyết định rời bỏ vị trí Product Manager & E-commerce Manager
                  tại tập đoàn Perfetti Van Melle Việt Nam để trở thành giảng viên tại Greenwich Việt Nam. Bằng sự quyết
                  tâm với giáo dục, thầy được rất nhiều bạn sinh viên yêu mến bởi kiến thức chuyên môn, sự tận tâm và
                  tính hài hước của mình. Đặc biệt hơn, thầy đã thành công với vị trí Trainer và founder của các dự án
                  phát triển doanh nghiệp xã hội như MOM&ME CARE và HEART, giành được nhiều giải thưởng nổi bật về phát
                  triển ý tưởng doanh nghiệp xã hội khi công tác tại Greenwich Việt Nam.
                  <br />
                  <br />
                  🔹 Khởi nguồn COMEPASS Nhận biết tầm quan trọng đặc biệt của tiếng Anh bởi khi đã từng làm việc trong
                  môi trường đa quốc gia; CEO Xuân Lĩnh luôn tâm huyết với việc mang lại cho các bạn sinh viên nhiều kỹ
                  năng, kiến thức để nâng cao năng lực bản thân, thực hiện hóa ước mơ du học, định cư tại các nước khác,
                  hoặc cơ hội nghề nghiệp rộng mở hơn. Thầy đã trực tiếp giảng dạy và giúp hàng trăm học sinh đến gần
                  hơn với ước mơ của mình. Đây cũng là lý do thúc đẩy thầy phát triển COMEPASS-lan tỏa tinh thần yêu
                  thích và học tiếng Anh cũng như lan tỏa những giá trị tích cực cho cộng đồng.
                </span>
              </p>
              <a
                onClick={() => setColapse2((prev) => !prev)}
                className='text-[#2694d1] inline-flex items-center cursor-pointer'
              >
                Learn More
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
