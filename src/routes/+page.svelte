<script lang="ts">
    import Icon from "$lib/components/Icon.svelte";
    import logo from "$lib/images/Logo.png";

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

<div class="flex flex-row justify-center items-center h-screen w-screen">
    <div class="flex flex-row gap-10">
        <div class="flex flex-col justify-center">
            <h1 class="text-mono text-2xl font-medium text-text">Hi, I am</h1>
            <h1 class="text-mono text-5xl font-semibold text-primary">
                Matteo Peretto
            </h1>
            <h1
                class="text-mono text-2xl font-medium text-text max-w-[550px] pt-2"
            >
                A {age} years old guy that loves tinkering, crafting and learning
                innovative solutions to make my life easier.
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
        <div>
            <img src={logo} alt="Logo" class="max-w-[300px] rounded-md" />
        </div>
    </div>
</div>
