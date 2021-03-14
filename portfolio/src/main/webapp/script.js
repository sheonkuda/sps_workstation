// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a quote to the screen
 */
function addRandomGreeting() {
 
  const greeting = 'As long as there are those that remember what was, there will always be those that are unable to accept what can be~Thanos';
  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

async function getFact(){
    const fact = await fetch('/one-thing-about-me');
    const factText = await fact.json();
    
    const num = Math.trunc(Math.random() * 3);
    const factContainer = document.getElementById('fact-id');
    console.log(factText);
    factContainer.innerText = factText[num];
}

function requestTranslation() {
        const text = document.getElementById('greeting-container').innerText;
        const languageCode = document.getElementById('language').value;

        const resultContainer = document.getElementById('greeting-container');

        const params = new URLSearchParams();
        params.append('text', text);
        params.append('languageCode', languageCode);

        fetch('/translate', {
          method: 'POST',
          body: params
        }).then(response => response.text())
        .then((translatedMessage) => {
          resultContainer.innerText = translatedMessage;
        });
}