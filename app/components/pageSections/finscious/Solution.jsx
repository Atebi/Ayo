import Image from "next/image";
import Link from "next/link";
import HR from "../../HR";
import Button from "../../Button";

const Solution = () => {
  return (
    <div className="leading-normal">
      <h2 className="text-center text-4xl font-bold lg:text-6xl">Solution</h2>
      <HR />

      {/* approach */}
      <div className="my-28 max-w-xl">
        <h3 className="mb-6 text-2xl font-medium lg:text-4xl">Approach</h3>
        <p>
          In my approach to defining the interface requirements for this
          project, I emphasized prioritizing the core fintech features found in
          similar platforms. By implementing the 'Jacob principle,' my goal was
          to create an onboarding experience that swiftly instills a sense of
          familiarity for users engaging with the platform. The UX study,
          moodboard, lo-fi wireframe and basic branding took one month. Thanks
          to the general user base and applying the "Jacob principle", I was
          also able to validate the UX flows within that time period.
        </p>
      </div>

      <div>
        <i className="highlight mb-4 block text-center text-sm">
          moodboard created in Figma
        </i>
        {/* moodboard Image */}
        <div className="relative mx-auto mb-10 block w-full max-w-4xl bg-slate-300 shadow-lg">
          <Image
            src="/ayo/fin_moodboard.webp"
            alt="Finscious moodboard"
            // placeholder="blur"
            priority={true}
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
            sizes="100vw , (max-width: 1024px) 896px"
            quality={100}
          />
        </div>
      </div>

      {/****/}

      {/* ui design */}
      <div className="my-28 max-w-xl">
        <h3 className="mb-6 text-2xl font-medium lg:text-4xl">UI Design</h3>
        <p>
          Once the usability issues were resolved, I proceeded to design the
          final screens for mobile in Figma, using Google's material design
          guidelines. My goal was to create a visual identity that aligns with
          the platform's goal, which is "Financial consciousness". The design
          incorporates contrasting colours, utilizing Kelly Green to represent
          income and a vivid Red to signify expenses. Additionally, I employed
          subtle yet defined shadow effects around components to enhance visual
          clarity and delineate distinct sections on the screen, aiming to
          heighten user awareness and facilitate clear differentiation between
          various elements.
        </p>
      </div>

      <div>
        <i className="highlight mb-4 block text-center text-sm">
          Style guide created in Figma
        </i>
        {/* style guide img for ui design fin_style */}
        <div className="relative mx-auto mb-10 block w-full bg-neutral-200/50 py-10">
          <Image
            src="/ayo/fin_style.webp"
            alt="Finscious style guide image"
            // placeholder="blur"
            // priority={true}
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
            sizes="100vw , (max-width: 1024px) 896px"
            quality={100}
          />
        </div>
      </div>

      {/* Onboarding screens */}
      <div className="mx-auto mt-40">
        <div className="mx-auto mb-12 max-w-md text-center">
          <p className="mb-1 text-lg font-medium">Onboarding screens</p>
          <p className="highlight text-base">
            The onboarding screens immediately enlightens the user on the
            application's purpose and functionalities.
          </p>
        </div>

        {/*  onboarding images*/}
        <div className="mx-auto grid max-w-6xl grid-cols-1 place-items-center gap-12 px-6 md:grid-cols-3 md:px-10">
          {/* img-1 */}
          <div className="shadow-3xl relative max-w-sm rounded-3xl bg-slate-300 ">
            <Image
              src="/ayo/fin_onboarding_1.webp"
              // fill={true}
              alt="Finscious onboarding image 1"
              // priority={true}
              // style={{ objectFit: "cover", borderRadius: "24px" }}
              // sizes="(max-width: 768px) 320px"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto", borderRadius: "24px" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
              quality={100}
            />
          </div>
          {/* img-2 */}
          <div className="shadow-3xl relative max-w-sm rounded-3xl bg-slate-300 ">
            <Image
              src="/ayo/fin_onboarding_2.webp"
              // fill={true}
              alt="Finscious onboarding image 2"
              // priority={true}
              // style={{ objectFit: "cover", borderRadius: "24px" }}
              // sizes="(max-width: 768px) 320px"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto", borderRadius: "24px" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
              quality={100}
            />
          </div>
          {/* img-3 */}
          <div className="shadow-3xl relative max-w-sm rounded-3xl bg-slate-300 ">
            <Image
              src="/ayo/fin_onboarding_3.webp"
              // fill={true}
              alt="Finscious onboarding image 3"
              // priority={true}
              // style={{ objectFit: "cover", borderRadius: "24px" }}
              // sizes="(max-width: 768px) 320px"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto", borderRadius: "24px" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
              quality={100}
            />
          </div>
        </div>
      </div>

      {/* Sign up/Login screens */}
      <div className="mx-auto mt-40">
        <div className="mx-auto mb-12 max-w-md">
          <p className="mb-1 text-center text-lg font-medium">
            Sign up/Login screens
          </p>
          <p className="mb-6 text-center">
            This screen{" "}
            <span className="highlight">
              enables users to authenticate their access to Finscious with their
              name, email and password or by using their Google account
            </span>
            .
          </p>
        </div>

        {/*  sign up and Login images*/}
        <div className="mx-auto grid max-w-2xl grid-cols-1 place-items-center gap-12 md:grid-cols-2">
          {/* img-1 */}
          <div className="shadow-3xl relative max-w-sm rounded-3xl bg-slate-300 ">
            <Image
              src="/ayo/fin_signup.webp"
              // fill={true}
              alt="Finscious signup image"
              // priority={true}
              // style={{ objectFit: "cover", borderRadius: "24px" }}
              // sizes="(max-width: 768px) 320px"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto", borderRadius: "24px" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
              quality={100}
            />
          </div>
          {/* img-2 */}
          <div className="shadow-3xl relative max-w-sm rounded-3xl bg-slate-300 ">
            <Image
              src="/ayo/fin_login.webp"
              // fill={true}
              alt="Finscious login image"
              // priority={true}
              // style={{ objectFit: "cover", borderRadius: "24px" }}
              // sizes="(max-width: 768px) 320px"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto", borderRadius: "24px" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
              quality={100}
            />
          </div>
        </div>
      </div>

      {/* features with images */}
      {/* feature-1 */}
      <div className="mt-40 flex flex-wrap items-center justify-center gap-6 md:flex-row-reverse">
        <div className="max-w-xs">
          <p className="mb-2 text-lg font-medium">Home screen</p>
          <p>
            The home screen shows the{" "}
            <span className="highlight">
              user dashboard at the top, total income and expenses and recent
              transactions
            </span>
            . Every section of the app is reachable from the{" "}
            <span className="highlight">bottom navigation bar</span>.
          </p>
        </div>

        {/* home img */}
        <div className="shadow-3xl relative max-w-sm rounded-3xl ">
          <Image
            src="/ayo/fin_home.webp"
            // fill={true}
            alt="Finscious home image"
            // priority={true}
            // style={{ objectFit: "cover", borderRadius: "24px" }}
            // sizes="(max-width: 768px) 320px"
            width={0}
            height={0}
            style={{ width: "100%", height: "auto", borderRadius: "24px" }}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
            quality={100}
          />
        </div>
      </div>

      {/* feature-2 */}
      <div className="mt-40 flex flex-wrap items-center justify-center gap-6">
        <div className="max-w-xs">
          <p className="mb-2 text-lg font-medium">Income and Expenses screen</p>
          <p>
            This screen provides a{" "}
            <span className="highlight">
              detailed representation of your income/expenses
            </span>
            , automatically sorted by the most recent transactions. You can
            select the desired <span className="highlight">time period</span>{" "}
            for viewing by clicking on the 'year' and 'month' buttons located at
            the top of the page, below the app bar.
          </p>
        </div>

        {/*  twin images for income and expenses*/}
        <div className="flex flex-col items-center gap-2 md:flex-row">
          {/* income img */}
          <div className="shadow-3xl relative max-w-sm rounded-3xl bg-slate-300 ">
            <Image
              src="/ayo/fin_income.webp"
              // fill={true}
              alt="Finscious income image"
              // priority={true}
              // style={{ objectFit: "cover", borderRadius: "24px" }}
              // sizes="(max-width: 768px) 320px"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto", borderRadius: "24px" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
              quality={100}
            />
          </div>
          {/* expenses img */}
          <div className="shadow-3xl relative max-w-sm rounded-3xl ">
            <Image
              src="/ayo/fin_expenses.webp"
              // fill={true}
              alt="Finscious expense image"
              // priority={true}
              // style={{ objectFit: "cover", borderRadius: "24px" }}
              // sizes="(max-width: 768px) 320px"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto", borderRadius: "24px" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
              quality={100}
            />
          </div>
        </div>
      </div>

      {/* feature-3 */}
      <div className="mt-40 flex flex-wrap items-center justify-center gap-6 md:flex-row-reverse">
        <div className="max-w-xs">
          <p className="mb-2 text-lg font-medium">Add income/expense screen</p>
          <p>
            This page enables the{" "}
            <span className="highlight">recording of new transactions</span>.
            Additionally, it offers the functionality to customize the category
            name.
          </p>
        </div>

        {/*  twin images for add-income and add-expenses*/}
        <div className="flex flex-col gap-2 md:flex-row">
          {/* add-income img */}
          <div className="shadow-3xl relative max-w-sm rounded-3xl bg-slate-300 ">
            <Image
              src="/ayo/fin_add_income.webp"
              // fill={true}
              alt="Finscious add-income image"
              // priority={true}
              // style={{ objectFit: "cover", borderRadius: "24px" }}
              // sizes="(max-width: 768px) 320px"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto", borderRadius: "24px" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
              quality={100}
            />
          </div>
          {/* add-expenses img */}
          <div className="shadow-3xl relative max-w-sm rounded-3xl bg-slate-300 ">
            <Image
              src="/ayo/fin_add_expense.webp"
              // fill={true}
              alt="Finscious add-expense image"
              // priority={true}
              // style={{ objectFit: "cover", borderRadius: "24px" }}
              // sizes="(max-width: 768px) 320px"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto", borderRadius: "24px" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
              quality={100}
            />
          </div>
        </div>
      </div>

      {/* feature-4 */}
      <div className="mt-40 flex h-fit flex-col flex-wrap items-center justify-center gap-6 lg:flex-row lg:items-start">
        <div className="h-fit max-w-xs md:sticky md:left-0 md:top-24">
          <p className="mb-2 text-lg font-medium">Analysis screen</p>
          <p>
            This screen shows{" "}
            <span className="highlight">
              alterations in your income and expenses through a bar chart
            </span>
            . It allows for viewing data on a yearly, monthly, weekly, or daily
            basis. Furthermore, it provides insights into the{" "}
            <span className="highlight">
              income category generating the highest earnings
            </span>{" "}
            and the{" "}
            <span className="highlight">
              expense category consuming the largest portion of your finances
            </span>
            .
          </p>
        </div>

        {/* images for analysis screen*/}
        <div className="grid grid-cols-1 place-items-center gap-2 md:grid-cols-2">
          {/* yearly-income img */}
          <div className="shadow-3xl relative max-w-sm rounded-3xl bg-slate-300 ">
            <Image
              src="/ayo/fin_yearly_income.webp"
              // fill={true}
              alt="Finscious yearly-income image"
              // priority={true}
              // style={{ objectFit: "cover", borderRadius: "24px" }}
              // sizes="(max-width: 768px) 320px"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto", borderRadius: "24px" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
              quality={100}
            />
          </div>
          {/* monthly-income img */}
          <div className="shadow-3xl relative max-w-sm rounded-3xl bg-slate-300 ">
            <Image
              src="/ayo/fin_monthly_income.webp"
              // fill={true}
              alt="Finscious monthly income image"
              // priority={true}
              // style={{ objectFit: "cover", borderRadius: "24px" }}
              // sizes="(max-width: 768px) 320px"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto", borderRadius: "24px" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
              quality={100}
            />
          </div>
          {/* yearly-expense img */}
          <div className="shadow-3xl relative max-w-sm rounded-3xl bg-slate-300 ">
            <Image
              src="/ayo/fin_yearly_expenses.webp"
              // fill={true}
              alt="Finscious yearly-expense image"
              // priority={true}
              // style={{ objectFit: "cover", borderRadius: "24px" }}
              // sizes="(max-width: 768px) 320px"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto", borderRadius: "24px" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
              quality={100}
            />
          </div>
          {/* weekly-expense img */}
          <div className="shadow-3xl relative max-w-sm rounded-3xl bg-slate-300 ">
            <Image
              src="/ayo/fin_monthly_expenses.webp"
              // fill={true}
              alt="Finscious monthly-expense image"
              // priority={true}
              // style={{ objectFit: "cover", borderRadius: "24px" }}
              // sizes="(max-width: 768px) 320px"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto", borderRadius: "24px" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
              quality={100}
            />
          </div>
        </div>
      </div>

      {/* feature-5 */}
      <div className="mt-40 flex flex-wrap items-center justify-center gap-6 md:flex-row-reverse">
        <div className="max-w-xs">
          <p className="mb-2 text-lg font-medium">Summary screen</p>
          <p className="highlight">
            This screen provides a textual summary of your current financial
            status.
          </p>
        </div>

        {/*  summary screen img*/}
        <div className="shadow-3xl relative max-w-sm rounded-3xl bg-slate-300 ">
          <Image
            src="/ayo/fin_summary.webp"
            // fill={true}
            alt="Finscious summary screen image"
            // priority={true}
            // style={{ objectFit: "cover", borderRadius: "24px" }}
            // sizes="(max-width: 768px) 320px"
            width={0}
            height={0}
            style={{ width: "100%", height: "auto", borderRadius: "24px" }}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
            quality={100}
          />
        </div>
      </div>

      {/* feature-6 */}
      <div className="mx-auto mt-40">
        <p className="mb-6 text-center text-lg font-medium">Profile screen</p>
        {/*  profile screen img*/}
        <div className="mx-auto grid max-w-2xl grid-cols-1 place-items-center gap-12 md:grid-cols-2">
          {/* img-1 */}
          <div className="shadow-3xl relative max-w-sm rounded-3xl bg-slate-300 ">
            <Image
              src="/ayo/fin_acct.webp"
              // fill={true}
              alt="Finscious account screen image"
              // priority={true}
              // style={{ objectFit: "cover", borderRadius: "24px" }}
              // sizes="(max-width: 768px) 320px"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto", borderRadius: "24px" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
              quality={100}
            />
          </div>
          {/* img-2 */}
          <div className="shadow-3xl relative max-w-sm rounded-3xl bg-slate-300 ">
            <Image
              src="/ayo/fin_bio.webp"
              // fill={true}
              alt="Finscious bio screen image"
              // priority={true}
              // style={{ objectFit: "cover", borderRadius: "24px" }}
              // sizes="(max-width: 768px) 320px"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto", borderRadius: "24px" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
              quality={100}
            />
          </div>
        </div>
      </div>

      {/* feature-7 */}
      <div className="mx-auto mt-40">
        <p className="mb-6 text-center text-lg font-medium">
          Forgot/Reset password screens
        </p>
        {/* images */}
        <div className="mx-auto grid w-full grid-cols-1 place-items-center gap-6 px-6 md:grid-cols-2 md:px-10 xl:grid-cols-4">
          {/* img-1 */}
          <div className="shadow-3xl relative max-w-sm rounded-3xl bg-slate-300 ">
            <Image
              src="/ayo/fin_forgot_password.webp"
              // fill={true}
              alt="Finscious forgot password image"
              // priority={true}
              // style={{ objectFit: "cover", borderRadius: "24px" }}
              // sizes="(max-width: 768px) 320px"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto", borderRadius: "24px" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
              quality={100}
            />
          </div>
          {/* img-2 */}
          <div className="shadow-3xl relative max-w-sm rounded-3xl bg-slate-300 ">
            <Image
              src="/ayo/fin_verify.webp"
              // fill={true}
              alt="Finscious password verification image"
              // priority={true}
              // style={{ objectFit: "cover", borderRadius: "24px" }}
              // sizes="(max-width: 768px) 320px"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto", borderRadius: "24px" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
              quality={100}
            />
          </div>
          {/* img-3 */}
          <div className="shadow-3xl relative max-w-sm rounded-3xl bg-slate-300 ">
            <Image
              src="/ayo/fin_reset_password.webp"
              // fill={true}
              alt="Finscious reset password image"
              // priority={true}
              // style={{ objectFit: "cover", borderRadius: "24px" }}
              // sizes="(max-width: 768px) 320px"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto", borderRadius: "24px" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
              quality={100}
            />
          </div>
          {/* img-4 */}
          <div className="shadow-3xl relative max-w-sm rounded-3xl bg-slate-300 ">
            <Image
              src="/ayo/fin_password_updated.webp"
              // fill={true}
              alt="Finscious password updated image"
              // priority={true}
              // style={{ objectFit: "cover", borderRadius: "24px" }}
              // sizes="(max-width: 768px) 320px"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto", borderRadius: "24px" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 33vw"
              quality={100}
            />
          </div>
        </div>
      </div>
      {/**End of ui design category section**/}

      {/* go to figma prototype */}
      <Link href="#" className="mx-auto my-20 block w-fit">
        <Button text="PROTOTYPE" />
      </Link>
    </div>
  );
};

export default Solution;
