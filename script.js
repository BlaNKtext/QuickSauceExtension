var menuId = chrome.contextMenus.create({
  title: "QuickSauce",
  id: "parent",
  contexts: ["selection"],
  onclick: accessNhentai,
})

chrome.contextMenus.create({
  title: "Open in nHentai",
  parentId: "parent",
  contexts: ["selection"],
  onclick: accessNhentai,
})

var menuId = chrome.contextMenus.create({
  title: "Download",
  id: "dl",
  parentId: "parent",
  contexts: ["selection"],
})

chrome.contextMenus.create({
  title: "Download as ZIP",
  parentId: "dl",
  contexts: ["selection"],
  onclick: accessnhdl,
})

chrome.contextMenus.create({
  title: "Download as CBZ",
  parentId: "dl",
  contexts: ["selection"],
  onclick: accessnhdlalt,
})

function accessNhentai(info, tab) {
  var nhentaiCode = Number(info.selectionText.trim())
  // TODO: if not a number, do not create context menu
  if (!isNaN(nhentaiCode)) {
    chrome.windows.create({
      url: `https://nhentai.net/g/${nhentaiCode}`,
      incognito: true,
    })
  }
}

function accessnhdl(info, tab) {
  var nhentaiCode = Number(info.selectionText.trim())
  // TODO: if not a number, do not create context menu
  if (!isNaN(nhentaiCode)) {
    chrome.windows.create({
      url: `https://nhdl.herokuapp.com/download/nhentai/${nhentaiCode}/?e=zip`,
      incognito: true,
    })
  }
}

function accessnhdlalt(info, tab) {
  var nhentaiCode = Number(info.selectionText.trim())
  // TODO: if not a number, do not create context menu
  if (!isNaN(nhentaiCode)) {
    chrome.windows.create({
      url: `https://nhdl.herokuapp.com/download/nhentai/${nhentaiCode}/?e=CBZ`,
      incognito: true,
    })
  }
}