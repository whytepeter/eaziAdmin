<template>
    <div>
        {{ questions }}
    </div>
</template>

<script setup>
const questions = [
    {
        question: 'How satisfied are you with the customer support provided by the team',
        answers: [
            { answer: 'extremely', percentage: 36 },
            { answer: 'very', percentage: 32 },
            { answer: 'moderately', percentage: 18 },
            { answer: 'slightly', percentage: 10 },
            { answer: 'Not at all', percentage: 4 },
        ]
    }, {
        question: 'How satisfied are you with the customer support provided by the team',
        answers: [
            { answer: 'extremely', percentage: 36 },
            { answer: 'very', percentage: 32 },
            { answer: 'moderately', percentage: 18 },
            { answer: 'slightly', percentage: 10 },
            { answer: 'Not at all', percentage: 4 },
        ]
    },
    {
        question: 'How satisfied are you with the customer support provided by the team',
        answers: [
            { answer: 'extremely', percentage: 36 },
            { answer: 'very', percentage: 32 },
            { answer: 'moderately', percentage: 18 },
            { answer: 'slightly', percentage: 10 },
            { answer: 'Not at all', percentage: 4 },
        ]
    },
]
</script>

<style lang="scss" scoped></style>