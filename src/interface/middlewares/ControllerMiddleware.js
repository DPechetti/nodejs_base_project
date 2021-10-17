module.exports = fn => ctx => fn(ctx).catch(ctx.next);
