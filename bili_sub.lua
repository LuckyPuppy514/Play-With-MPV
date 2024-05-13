-- 下载哔哩哔哩json字幕转换为srt字幕
-- mpv系列播放器使用，放在~/scripts目录下
-- 使用方式：启动参数 --scrpit-opts-append=bili_sub-url="https://.............."

local msg = require 'mp.msg'
local utils = require 'mp.utils'
local options = require 'mp.options'

local opts = {url = ''}
options.read_options(opts, _, process)

local srt_file = mp.command_native({'expand-path', '~~cache/'}) .. '/bili_sub.srt'
function process()
    if not opts.url or opts.url == '' then return end
    msg.info('下载字幕: ' .. opts.url)
    local res = mp.command_native({
        name = 'subprocess', 
        capture_stdout = true, 
        playback_only = false, 
        args = {'curl', opts.url}
    })
    if res.status ~= 0 then
        msg.warn('字幕下载失败')
        return 
    end
    msg.info('转换为srt字幕...')
    local response_body = utils.parse_json(res.stdout)
    local title = '哔哩哔哩字幕'
    if response_body.type then title = title .. ' [' .. response_body.type .. ']' end
    local srt_content = ''
    for i, v in ipairs(response_body.body) do
        srt_content = srt_content .. i .. '\r\n'
        srt_content = srt_content .. convert_time(v.from) .. ' --> ' .. convert_time(v.to) .. '\r\n'
        srt_content = srt_content .. v.content .. '\r\n'
        srt_content = srt_content .. '\r\n'
    end
    local file = io.open(srt_file, 'w')
    if not file then
        msg.warn('无法写入字幕文件')
        return
    end
    file:write(srt_content)
    file:close()
    msg.info('加载srt字幕...')
    local success = mp.commandv('sub-add', srt_file, 'select', title)
    msg.info('srt字幕加载' .. (success and '成功' or '失败'))
end

-- 秒数转换为srt字幕的时间格式
-- 例如 79.14 转为 00:01:19,140
function convert_time(t)
    local sec = math.floor(t)
    local mills = math.floor((t - sec) * 1000)
    return os.date('!%H:%M:%S', sec) .. ',' .. mills
end

mp.register_event('file-loaded', process)
