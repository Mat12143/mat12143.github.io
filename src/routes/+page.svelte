<script lang="ts">
    import Icon from "$lib/components/Icon.svelte";
    import logo from "$lib/images/Logo.webp";

    const dateOfBirth = new Date("2005-08-30");

    const today = new Date();
    const birthYear = dateOfBirth.getFullYear();
    const birthMonth = dateOfBirth.getMonth();
    const birthDay = dateOfBirth.getDate();

    let age = today.getFullYear() - birthYear;

    // Check if the birthday has occurred this year
    const thisYearBirthday = new Date(
        today.getFullYear(),
        birthMonth,
        birthDay,
    );
    if (today < thisYearBirthday) {
        age--;
    }
</script>

<div class="flex flex-row justify-center items-center h-full w-full lg:h-screen lg:w-screen">
    <div class="flex flex-col lg:flex-row gap-10 items-center justify-center">
        <div class="flex flex-col justify-center items-center text-center lg:items-start lg:text-start">
            <h1 class="text-mono text-xl font-medium text-text font-mono pb-2">Hi, I am</h1>
            <h1 class="text-mono text-5xl font-semibold text-primary">
                Matteo Peretto
            </h1>
            <h1
                class="text-mono text-xl font-medium text-text lg:max-w-[550px] max-w-[300px] pt-2 font-mono"
            >
                A {age} years old guy that loves Linux, Networking, Programming &
                Technology.
            </h1>
            <div class="pt-5 flex gap-3">
                <Icon
                    link="https://t.me/Mat12143"
                    icon="icon-[tabler--brand-telegram]"
                />
                <Icon
                    link="mailto:perettomatteo5@gmail.com"
                    icon="icon-[tabler--mail]"
                />
                <Icon
                    link="https://github.com/Mat12143"
                    icon="icon-[tabler--brand-github]"
                />
            </div>
        </div>
        <div class="">
            <img src={logo} alt="Logo" class="lg:max-w-[300px] max-w-[250px] rounded-md" />
        </div>
    </div>
</div>
